const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/generar-jwt');

const crearUsuario = async (req, resp = response) => {
    
    const { email, password, documento } = req.body;
    // Falta odontólogo
    try {
        let usuario = await Usuario.findOne({ email, documento });
        if (usuario) {
            return resp.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario registrado con ese email o documento'
            })
        }
        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        resp.status(201).json({
            ok: true,
            msg: 'Registro de usuario exitoso',
            uid: usuario.id,
            name: usuario.name
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear el usuario'
        })
    }
}

const loginUsuario = async (req, resp = response) => {
    const { email, password } = req.body;

    try {
        //confirmar email
        let usuario = await Usuario.findOne({ email });

        //Falta mirar lo del odontólogo

        if (!usuario) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        //confirmar contraseña
        const validPassword = bcrypt.compareSync(password, usuario.password);
        
        if (!validPassword) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        //generar token
        const token = await generarJWT(usuario.id, usuario.name);
        
        resp.json({
            ok: true,
            msg: 'Ok',
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error al autenticar'
        });
    }
}

const logoutUsuario = async (req, resp = response) => {

    /*
    const options = {
        expires: new Date(Date.now() + 5000),
    }

    
    resp.cookie('jwt', 'expiredtoken', options);
    resp.status(200).json({
        ok: true,
        msg: 'Sesión cerrada con exito'
    });*/

    //
    let token = '';
    token = req.headers['x-access-token'] || req.headers['authorization'];

    if(!token) {
        resp.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        jwt.sign(token, "", { expiresIn: 1 } , (logout, err) => {
            if (logout) {
                resp.status(200).json({
                    ok: true,
                    msg: 'Sesión cerrada con exito'
                });
            } else {
                console.log(err);
                resp.status(401).json({
                    ok: false,
                    msg: 'Error al cerrar sesión'
                });
            }
        });
    } catch (error) {
        console.log(error);
        resp.status(401).json({
            ok: false,
            msg: 'Error al cerrar sesión'
        });
    }    

}

const actualizarPassword = async (req, resp = response) => {

    const {password} = req.body;
    const usuarioAutenticado = req.usuario;

    try {

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuarioAutenticado.password = bcrypt.hashSync(password, salt);

        const passwordUpdate = await Usuario.findByIdAndUpdate(usuarioAutenticado.id, usuarioAutenticado, { new: true });

        resp.json({
            ok: true,
            msg: 'Contraseña actualizada de manera exitosa',
            usuario: passwordUpdate
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al actualizar la contraseña',
        });
    }

}


const revalidarToken = async (req, resp = response) => {

    const { uid, name } = req;
    //generar nuevo token
    const token = await generarJWT(uid, name);

    resp.json({
        ok: true,
        token: token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    logoutUsuario,
    revalidarToken,
    actualizarPassword
}