const{request, response} = require('express')
const{Listadopaquetes} = require('../models/paquetes')
const{guardarDB, leerDB} = require('../helpers/gestorDB')

const getpaquetes = (req = request,res = response) =>{
    let lista = new Listadopaquetes()
    let datosJSON = leerDB('Paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postpaquetes = (req = request,res = response) =>{
    let lista = new Listadopaquetes()
    let datosJSON = leerDB('Paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'Paquetes')
    res.send('Registro Creado')
}

const putpaquetes = (req = request,res = response) =>{
    let lista = new Listadopaquetes()
    let datosJSON = leerDB('Paquetes');
    lista.cargarTareasFromArray(datosJSON)

    const datos = lista.listadoArr.map(p =>
        p.id == req.params.id
        ? {"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'Paquetes')
    res.send('Registro Actualizado')
}

const deletepaquetes = (req = request,res = response) =>{
    let lista = new Listadopaquetes()
    let datosJSON = leerDB('Paquetes');
    lista.cargarTareasFromArray(datosJSON)

    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'Paquetes')
    res.send('Registro Eliminado')
}

module.exports ={
    getpaquetes,
    postpaquetes,
    putpaquetes,
    deletepaquetes
}