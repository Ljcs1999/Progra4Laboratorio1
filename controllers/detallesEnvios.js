const{request, response} = require('express')
const{ListadodetalleEnvios} = require('../models/detallesEnvios')
const{guardarDB, leerDB} = require('../helpers/gestorDB')

const getdetallesEnvios = (req = request,res = response) =>{
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('DetalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postdetallesEnvios = (req = request,res = response) =>{
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('DetalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'DetalleEnvios')
    res.send('Registro Creado')
}

const putdetallesEnvios = (req = request,res = response) =>{
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('DetalleEnvios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id
        ? {"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'DetalleEnvios')
    res.send('Registro Actualizado')
}

const deletedetallesEnvios = (req = request,res = response) =>{
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('DetalleEnvios');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'DetalleEnvios')
    res.send('Registro Eliminado')
}

module.exports ={
    getdetallesEnvios,
    postdetallesEnvios,
    putdetallesEnvios,
    deletedetallesEnvios
}