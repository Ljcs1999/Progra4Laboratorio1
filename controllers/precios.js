const{request, response} = require('express')
const{Listadoprecios} = require('../models/precios')
const{guardarDB, leerDB} = require('../helpers/gestorDB')

const getprecios = (req = request,res = response) =>{
    let lista = new Listadoprecios()
    let datosJSON = leerDB('detalleprecios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postprecios = (req = request,res = response) =>{
    let lista = new Listadoprecios()
    let datosJSON = leerDB('detalleprecios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'detalleprecios')
    res.send('Registro Creado')
}

const putprecios = (req = request,res = response) =>{
    let lista = new Listadoprecios()
    let datosJSON = leerDB('detalleprecios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id
        ? {"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'detalleprecios')
    res.send('Registro Actualizado')
}

const deleteprecios = (req = request,res = response) =>{
    let lista = new Listadoprecios()
    let datosJSON = leerDB('detalleprecios');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'detalleprecios')
    res.send('Registro Eliminado')
}

module.exports ={
    getprecios,
    postprecios,
    putprecios,
    deleteprecios
}