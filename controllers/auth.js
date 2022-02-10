const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/Usuario');
const Odontologo = require('../models/Odontologo');
const { generarJWT } = require('../helpers/generar-jwt');

/* Crear Usuario */
const crearUsuario = async (req, resp = response) => {
    try {
        const { email, password, documento } = req.body;

        let usuario = await Usuario.findOne({ documento });
        let usuario2 = await Usuario.findOne({ email});
        if (usuario) {
            return resp.status(200).json({
                ok: false,
                msg: 'Ya existe un usuario registrado con ese documento'
            })
        }
        if(usuario2){
            return resp.status(200).json({
                ok: false,
                msg: 'Ya existe un usuario registrado con ese email'
            })
        }
        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        return resp.status(201).json({
            ok: true,
            msg: 'Registro de usuario exitoso',
            uid: usuario.id,
            name: usuario.name
        });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            ok: false,
            msg: 'Error al crear el usuario'
        })
    }
}

/*  Login  */
const loginUsuario = async (req, resp = response) => {

    try {
        const { email, password } = req.body;

        //confirmar email
        let usuario = await Usuario.findOne({ email }).populate('rol');
        let odontologo = await Odontologo.findOne({ email }).populate('idEspecializacion');

        if (!usuario && !odontologo){
            return resp.status(201).json({
                ok: false,
                msg: 'Usuario o contraseña erradas'
            });
        }

        if(usuario){
            //confirmar contraseña
            const validPassword = bcrypt.compareSync(password, usuario.password);
            
            if (!validPassword) {
                return resp.status(201).json({
                    ok: false,
                    msg: 'Usuario o contraseña erradas'
                });
            }

            const token = await generarJWT(usuario.id);

            return resp.json({
                ok: true,
                msg: 'Sesión Iniciada',
                uid: usuario.id,
                name: usuario.nombre,
                rol: usuario.rol.nombre,
                token
            });
        }else{
            if(odontologo){
                //confirmar contraseña
                const validPassword = bcrypt.compareSync(password, odontologo.password);
                
                if (!validPassword) {
                    return resp.status(201).json({
                        ok: false,
                        msg: 'Usuario o contraseña erradas'
                    });
                }

                const token = await generarJWT(odontologo.id);

                return resp.status(200).json({
                    ok: true,
                    msg: 'Sesión Iniciada',
                    uid: odontologo.id,
                    name: odontologo.nombre,
                    rol: odontologo.idEspecializacion.nombre,
                    token
                });
            }
        }
    } catch(error) {
        return resp.status(500).json({
            ok: false,
            msg: 'Error al autenticar'
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

        await Usuario.findByIdAndUpdate(usuarioAutenticado.id, usuarioAutenticado, { new: true });

        return resp.status(200).json({
            ok: true,
            msg: 'Contraseña actualizada de manera exitosa',
        });

    } catch (error) {
        console.log(error);
        return resp.status(400).json({
            ok: false,
            msg: 'error al actualizar la contraseña',
        });
    }
}

/**get Usuario By ID */
const getUsuarioById = async (req, resp = response) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findById(id);
        resp.status(200).json({
            ok: true,
            msg: 'Usuario',
            usuario
        });
    } catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            msg: 'error al listar Usuario',
        });
    }
}


const actualizarUsuario = async (req, resp = response) => {

    const usuarioId = req.params.id;

    try {
        
        const usuario = await Usuario.findById(usuarioId);

        if(!usuario) {
            return resp.status(201).json({
                ok: false,
                msg: 'El id no coincide con ningun registro en la base de datos',
            });
        }
        const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, req.body, {new: true});

        return resp.status(200).json({
            ok: true,
            msg: 'Usuario actualizado exitosamente',
            usuario: usuarioActualizado
        });
        
    } catch (error) {
        console.log(error);
        return resp.status(400).json({
            ok: false,
            msg: 'error al actualizar usuario',
        });
    }
}


const revalidarToken = async (req, resp = response) => {

    const { uid } = req;
    //generar nuevo token
    const token = await generarJWT(uid);

    return resp.status(200).json({
        ok: true,
        token: token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    actualizarUsuario,
    actualizarPassword,
    getUsuarioById
}