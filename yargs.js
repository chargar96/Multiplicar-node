const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime La tabla',options)
    .command('crear', 'Imprime La tabla y guarda la tabla en un archivo',options)
    .help()
    .argv;


    module.exports = {
        argv
    }