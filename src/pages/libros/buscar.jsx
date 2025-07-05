
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

import Header from '../../components/header/header';

import LibroService from '../../services/libroService';

function Buscar() {

  const [setUsers] = useState([]);
 

 useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await LibroService.getLibros();
      setUsers(usersData);
    };

    fetchUsers();
  }, []);


  const btnBuscar = () => {
    Swal.fire({
      title: "",
      text: "Busqueda Exitosa",
      icon: "info"
    });
  }


   
  return (
    <div>
      <Header />
      <main style={styles.mainContent}>
        <form id='formBuscar'>
          <div class="grid gap-12 mb-12 md:grid-cols-2">
            <div>
              <label for="first_name" class="text-blue-800">Titulo</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Titulo" />
            </div>
            <div>
              <label for="last_name" class="text-blue-800">Código ISBN </label>
              <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Código ISBN" />
            </div>
            <div>
              <label for="company" class="text-blue-800">Autor</label>
              <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Autor" />
            </div>
            <div>
              <label for="phone" class="text-blue-800">Idioma</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Selecicone Idioma</option>
                <option value="MX">Español</option>
                <option value="US">Ingles</option>
                <option value="CA">Frances</option>
                <option value="FR">Italiano</option>
              </select>
            </div>
            <div>
              <label for="website" class="text-blue-800">Categoria</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Selecicone Categoria</option>
                <option value="MX">Ficción</option>
                <option value="US">No Ficción</option>
                <option value="CA">Formato</option>
                <option value="FR">Temas Específicos</option>
              </select>
            </div>
            <div>
              <label for="website" class="text-blue-800">Genero</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Selecicone Categoria</option>
                <option value="MX">Novela</option>
                <option value="US">Cuento</option>
                <option value="CA">Romance</option>
                <option value="FR">Terror</option>
              </select>
            </div>
          </div>


          <button type="button" class="text-white bg-blue-900 hover:bg-blue-500  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={btnBuscar}>Buscar</button>
<br/><br/><br/>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               <th scope="col" class="px-6 py-3">
                   CODIGO ISBN
                </th>
              <th scope="col" class="px-6 py-3">
                   TITULO
                </th>
                <th scope="col" class="px-6 py-3">
                   AUTOR
                </th>
                <th scope="col" class="px-6 py-3">
                    CATEGORIA
                </th>
                 <th scope="col" class="px-6 py-3">
                    GENERO
                </th>
                <th scope="col" class="px-6 py-3">
                    IDIOMA
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 LA0001
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               El Psicoanalista
                </th>
                <td class="px-6 py-4">
                    John Katzenbach
                </td>
                <td class="px-6 py-4">
                    SUSPENSO
                </td>
                 <td class="px-6 py-4">
                   SUSPENSO
                </td>
                <td class="px-6 py-4">
                      ESPAÑOL
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/detalle" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETALLE</a>
                </td>
            </tr>
             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 LA0002
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Querido Jhon
                </th>
                <td class="px-6 py-4">
                  Nicholas Sparks
                </td>
                <td class="px-6 py-4">
                    ROMANCE
                </td>
                <td class="px-6 py-4">
                  ROMANCE
                </td>
                <td class="px-6 py-4">
                      ESPAÑOL
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/detalle" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETALLE</a>
                </td>
            </tr>
             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 LA0003
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 Batalla de Normadia
                </th>
                <td class="px-6 py-4">
                   Antony Beevor
                </td>
                <td class="px-6 py-4">
                    BELICO
                </td>
                 <td class="px-6 py-4">
                  BELICO
                </td>
                <td class="px-6 py-4">
                   ESPAÑOL
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/detalle" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETALLE</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
        </form>
      </main>
    </div>
  );
}

const styles = {
  container: {

    minHeight: 'calc(100vh - 60px)' // para compensar el header
  },
  mainContent: {
    flex: 1,
    padding: '20px'
  }
};
export default Buscar
