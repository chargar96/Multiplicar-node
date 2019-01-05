// requireds
const fs = require('fs');

let listarTabla = (base, limite) =>{
    
    if(!Number(base)){
        console.log(`Wey! ${base} no es un puto numero, no mames!`);
        return;
    }
    

        // ciclo de tabla 
        for( i = 1 ; i <= limite ; i++ ){
            
            console.log(`2 * ${i} = ${base * i}`);
        }
} 

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`Wey! ${base} no es un puto numero, no mames!`);
            return;
        }

        let data = '';

        // ciclo de tabla 
        for( i = 1 ; i <= limite ; i++ ){
            data += `${base} * ${i} = ${base * i} \n`;
            console.log(`2 * ${i} = ${base * i}`);
        }

        // guardado de datos
        fs.writeFile(`tabla del ${base}.txt`, data, (err) => {
            if (err) 
                return(err)
            else
                resolve(`tabla del ${base}.txt`);
        });

    });
}
module.exports = {
    crearArchivo,
    listarTabla
}