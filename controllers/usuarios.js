const { response, request } = require('express');
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {
    //aca podemos usar destructuración de los datos requeridos
    const params = req.query;
    res.json({ msg: 'get - API - Controlador', params })
}

const usuariosPost = async(req, res = response) => {

    const { nombre, password, correo, rol } = req.body;
    const usuario = new Usuario({ nombre, password, correo, rol });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);


    await usuario.save();

    res.json({ msg: 'Usuario Guardado', usuario })
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({ msg: 'Put - API - Controlador', id })
}

const usuariosPatch = (req, res = response) => {
    res.json({ msg: 'Patch - API - Controlador' })
}

const usuariosDelete = (req, res = response) => {
    res.json({ msg: 'Delete - API - Controlador' })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}