import { ContenedorSQL } from "./src/container/ContenedorSQL.js";

const apiAutos = new ContenedorSQL('autos');
// const apiBicicletas = new ContenedorSQL('bicicletas');

async function main() {

    const listaAutos = [
        {marca: 'TOYOTA', modelo: 'RAV4'},
        {marca: 'TOYOTA', modelo: 'RAV4'},
        {marca: 'TOYOTA', modelo: 'RAV4'}
    ]

    let res;

    //1) Inserta en base de datos
    res = await apiAutos.insertar(listaAutos)
    console.log('Inserta en tabla', res);

    //2) Seleccionar todos los registros
    res = await apiAutos.listarAll();
    console.log('Recupera todos los registros', res);

    //3) Seleccionar por indice un registro
    res = await apiAutos.listar(2);
    console.log('Seleccionar por indice un registro', res);

    //4) actualzia por ID
    res = await apiAutos.actualizar(4, {marca: 'HONDA', modelo: 'CR-V'})
    console.log('actualiza por ID', res);

    //4) actualzia por ID
    res = await apiAutos.actualizar(6, {modelo: 'SUPRA', marca:'ALGO'})
    console.log('actualiza por ID', res);

    //5) Seleccionar todos los registros
    res = await apiAutos.listarAll();
    console.log('Recupera todos los registros', res);

    //6) Elimina por ID
    res = await apiAutos.eliminar(3);
    console.log('Elimina por ID', res);

    //5) Seleccionar todos los registros
    res = await apiAutos.listarAll();
    console.log('Recupera todos los registros', res);

    //Finaliza la conexion con la base de datos
    await apiAutos.cerrarConexion();
}
main();

