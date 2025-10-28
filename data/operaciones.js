const fs = require('fs');
const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('data/citas.json', 'utf-8'));

    const nuevaCita = {nombre, edad, animal, color, enfermedad};
    
    const citasActualizadas = [...citas, nuevaCita];
    fs.writeFileSync('data/citas.json', JSON.stringify(citasActualizadas, null, 2), 'utf-8');
    console.log('Cita registrada exitosamente.');
}

const leer = () => {    
    const citas = JSON.parse(fs.readFileSync('data/citas.json', 'utf-8'));      
    console.log('Citas Registradas:');
    console.log (citas)};

    module.exports = { registrar, leer };