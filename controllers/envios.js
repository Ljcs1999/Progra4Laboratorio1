const{request, response} = require('express')
const{Listadoenvios} = require('../models/envios')
const{guardarDB, leerDB} = require('../helpers/gestorDB')

const getenvios = (req = request,res = response) =>{
    let lista = new Listadoenvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postenvios = (req = request,res = response) =>{
    let lista = new Listadoenvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado')
}

const putenvios = (req = request,res = response) =>{
    let lista = new Listadoenvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id
        ? {"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'envios')
    res.send('Registro Actualizado')
}

const deleteenvios = (req = request,res = response) =>{
    let lista = new Listadoenvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'envios')
    res.send('Registro Eliminado')
}

module.exports ={
    getenvios,
    postenvios,
    putenvios,
    deleteenvios
}