const {v4: uuidv4} = require('uuid');

class seguimiento{
    constructor(codigo,fecha,tracking,origen,destino,emisor,destinatario){
        this.id=uuidv4()
        this.codigo=codigo
        this.fecha=fecha
        this.tracking=tracking
        this.origen=origen
        this.destino=destino
        this.emisor=emisor
        this.destinatario=destinatario
    }
}

class Listadoseguimiento{
    constructor(){
        this._listado = {};
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    cargarTareasFromArray(datos =[]){
        datos.forEach(seguimientos => {
            this._listado[seguimientos.id] = seguimientos;
        });
    }

    crearEnvio(datos){
        const seguimientos = new seguimiento(
            datos.codigo,
            datos.fecha,
            datos.tracking,
            datos.origen,
            datos.destino,
            datos.emisor,
            datos.destinatario);
        this._listado[seguimientos.id] = seguimientos;
    }
}

module.exports ={
    Listadoseguimiento
}