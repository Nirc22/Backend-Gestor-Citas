const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');

const  Usuario  = require("../models/Usuario");
const Odontologo = require("../models/Odontologo");

const { generarJWT } = require('../helpers/generar-jwt');
const jwt = require('jsonwebtoken');

const enviarLink = async (req, res) => {
    try {
    
        const user = await Usuario.findOne({ email: req.body.email });
        const odontologo = await Odontologo.findOne({ email: req.body.email });

        console.log(user)
        console.log(odontologo)

        let _id = ''; 
        let email = '';

        if (user){
            _id = user._id;
            email = user.email;
            console.log(email)
        }
        else
        {
            if(odontologo){
                _id = odontologo._id;
                email = odontologo.email;
            }else
            {
                return res.status(400).send("El correo no existe");
            }
        }

        const token = await generarJWT(_id);

        console.log("token "+ token)


        const link = `${process.env.BASE_URL}/password-reset/${_id}/${token}`;


        res.status(200).json("El link para restaurar la constraseña fue enviado a su correo");

        try {
      
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'stezague88@gmail.com', // generated ethereal user
                    pass: 'llzwiuyughsdzbji', // generated ethereal password
                },
            });
            
            await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>',
                to: email,
                subject: 'Forgot password',
                text: link,
            });

            console.log("enviado")

        } catch (error) {
            res.status(500).json("Correo no enviado");
        }
       
        
    } catch (error) {
        res.status(500).json("Ocurrió un error");
        console.log(error);
    }
}

const restablecer = async (req, res) => {
    try {
        const token = req.params.token;
        const {uid} = jwt.verify(token, process.env.SECRET_KEY);

        const user = await Usuario.findById(uid);
        const odontologo = await Odontologo.findById(uid);

        password = req.body.password;

        const salt = bcrypt.genSaltSync();
        

        if(user){
            user.password = bcrypt.hashSync(password, salt);
            await user.save();
        }else{
            if(odontologo){
                odontologo.password = bcrypt.hashSync(password, salt);
                await odontologo.save();
            }
        }
        
     //Error a partir de acá
        /*const jwtSign = jwt.sign(token, "algo", { expiresIn: 5 });

        console.log("sign"+jwtSign);
        if(jwtSign){
            res.status(200).json("Contraseña restablecida exitosamente");
        } */
            
        
    } catch (error) {
        res.status(500).json("Token expirado o inválido");
        console.log(error);
    }
}

module.exports ={
    enviarLink,
    restablecer

}
