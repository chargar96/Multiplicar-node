let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Carlos'
}, {
    id: 3,
    nombre: 'Pedro'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}, {
    id: 3,
    salario: 2500
}];

let getEmpleado = async (id) => {

    

        let empleadosBD = empleados.find(empleado => empleado.id === id);

        if (!empleadosBD){
            throw new Error(`No Exsiste un empleado con el id ${ id }`);
        }else{
            return empleadosBD;
        }
    
}

let getSalario = async (empleado) =>{
    
    

        let salarioBD = salarios.find(salario => salario.id === empleado.id);

        if (!salarioBD){
            throw new Error(`No Exsiste un empleado con el id ${ empleado.id }`);
        }else{
            return {
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado.id
            };
        }
    
}

let getInfo = async (id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado)

    console.log(`nombre: ${resp.nombre} salario: ${resp.salario}`);
}

getInfo(5)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));