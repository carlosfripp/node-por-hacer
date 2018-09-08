'use strict'
const argv=require('./config/yargs.js').argv;
const colors=require('colors');
let comando=argv._[0];
const porHacer=require('./por-hacer/por-hacer.js');
switch(comando){
	case 'crear':
		let tarea=porHacer.crear(argv.descripcion);
		console.log(tarea);
	break;
	case 'listar':
		let lista=porHacer.getListado();
		for (let tarea of lista) {
			console.log('========Por hacer========='.green);
			console.log(tarea.descripcion);
			console.log('Estado: ',tarea.completado);
			console.log('=========================='.green)
		}
	break;
	case 'listar_estado':
		let listaEstado=porHacer.listado_estado(argv.completado);
		if(listaEstado.length>0){
			for (let estado of listaEstado) {
				console.log('========Por hacer========='.green);
				console.log(estado.descripcion);
				console.log('Estado: ',estado.completado);
				console.log('=========================='.green)
			}
		}
		else{
			console.log('No existe tarea con ese estado'.red);
		}
	break;
	case 'actualizar':
		let actualizado=porHacer.actualizar(argv.descripcion,argv.completado);
		console.log(actualizado);
	break;
	case 'borrar':
		let borrado=porHacer.borrar(argv.descripcion);
		console.log(borrado);
	break;
	default:
		console.log("No se encontro este comando");
}
//console.log(argv);