const argv = require('./yargs').argv;

const { crearArchivo } = require('./multiplicar');
const { listarTabla } = require('./multiplicar');
// variables

let comando = argv._[0];

switch(comando){

    case 'listar':
        console.log('La tabla es: ');
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log (`archivo creado: ${archivo}`))
            .catch(e => console.log(e));
    break;

    default:
        console.log('No se reconose el comando');
}

//console.log(argv.base);


