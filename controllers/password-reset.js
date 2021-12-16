const { Usuario } = require("../models/Usuario");
const Token = require("../models/token");
const crypto = require("crypto");
const Joi = require("joi");
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { generarJWT } = require('../helpers/generar-jwt');

const enviarLink = async (req, res) => {
    try {

        //Me busca si el usuario existe o no 
        const user = await Usuario.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send("El correo no existe");


        //generar token
        const token = await generarJWT(user.id, user.name);

        //si existe el usuario creo el token con el id 
        let token = await Token.findOne({ userId: user._id });

        console.log("token "+ token)
        
        if (!token) { 
            token = await new Token({ //me guarda el token en la colección de token por si no existe el token
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
        //await sendEmail(user.email, "Password reset", link);



        res.send("password reset link sent to your email account");

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
                to: user.email,
                subject: 'Forgot password',
                text: link,
            });
    
            console.log("email sent sucessfully");


        } catch (error) {
            console.log(error, "email not sent");
        }
       
        
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
}

const restablecer= async (req, res) => {
    try {

        const user = await Usuario.findById(req.params.id);
        if (!user) return res.status(400).send("invalid link or expired");


        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });

        if (!token) return res.status(400).send("Invalid link or expired");

        user.password = req.body.password;
        await user.save();
        await token.delete();

        res.send("password reset sucessfully.");
        
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
}

module.exports ={
    enviarLink,
    restablecer

}
