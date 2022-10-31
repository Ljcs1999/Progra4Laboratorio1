const{request, response} = require('express')
const{Listadoseguimiento} = require('../models/seguimiento')
const{guardarDB, leerDB} = require('../helpers/gestorDB')

const getseguimiento = (req = request,res = response) =>{
    let lista = new Listadoseguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postseguimiento = (req = request,res = response) =>{
    let lista = new Listadoseguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'seguimiento')
    res.send('Registro Creado')
}

const putseguimiento = (req = request,res = response) =>{
    let lista = new Listadoseguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id
        ? {"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'seguimiento')
    res.send('Registro Actualizado')
}

const deleteseguimiento = (req = request,res = response) =>{
    let lista = new Listadoseguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'seguimiento')
    res.send('Registro Eliminado')
}

module.exports ={
    getseguimiento,
    postseguimiento,
    putseguimiento,
    deleteseguimiento
}