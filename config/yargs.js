'use strict'
const descripcion={
	demand:true,
	alias:'d',
	desc:'Descripcion de la tarea por hacer'
}
const completado={
	default:true,
	alias:'c',
	desc:'Marca como completado o penddiente la tarea'
}
const argv=require('yargs')
	.command('crear','Crea un elemento por hacer',{descripcion})
	.command('actualizar','Actualiza el estado completado de una tarea',{descripcion,completado})
	.command('borrar','Borra una tarea de la lista',{descripcion})
	.command('listar_estado','Lista las tareas por el estado de completado',{completado})
	.help()
	.argv;
module.exports={
	argv
}