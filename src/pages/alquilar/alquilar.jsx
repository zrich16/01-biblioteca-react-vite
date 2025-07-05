import Header from '../../components/header/header';
import React, { useState } from 'react';

import Swal from 'sweetalert2'

function Principal() {



  const [formData, setFormData] = useState({
    clave: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

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
          <div class="grid grid-cols-6 gap-6">
            <div> <label for="first_name" class="text-blue-800">Clave Usuario</label></div>
            <div>  <input type="text" id="first_name" value={formData.clave} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Clave" />
            </div>
            <div >
              <button type="button" onClick={btnBuscar} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">BUSCAR</span>
              </button>
            </div>
          </div>

          <br/>
          <div id='divLista'>



<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
 <div class="grid gap-12 mb-12 md:grid-cols-2">
    <div>
              <label for="first_name" class="text-blue-800 dark:text-blue-800">NOMBRE CLIENTE   :  </label>
               <label for="first_name" class="text-blue-800">RICARDO MARTINEZ HERNANDEZ</label>
            </div>
 </div>

    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                   CLAVE
                </th>
                <th scope="col" class="px-6 py-3">
                   FECHA ALQUILER
                </th>
                <th scope="col" class="px-6 py-3">
                    CANTIDAD DE LIBROS
                </th>
                <th scope="col" class="px-6 py-3">
                    ESTATUS
                </th>
                 <th scope="col" class="px-6 py-3">
                    EXTENSIÓN  DE PLAZO
                </th>
                <th scope="col" class="px-6 py-3">
                    FEHCHA ENTREGA
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
                 2025/04/01
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    ENTREGADO
                </td>
                 <td class="px-6 py-4">
                 0
                </td>
                <td class="px-6 py-4">
                      2025/04/20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/detallealquiler" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETALLE</a>
                </td>
            </tr>
             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 LA0002
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 2025/05/01
                </th>
                <td class="px-6 py-4">
                   4
                </td>
                <td class="px-6 py-4">
                    ENTREGADO
                </td>
                <td class="px-6 py-4">
                 0
                </td>
                <td class="px-6 py-4">
                      2025/05/20
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/detallealquiler" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETALLE</a>
                </td>
            </tr>
             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 LA0003
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 2025/06/20
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    EN CURSO
                </td>
                 <td class="px-6 py-4">
                1
                </td>
                <td class="px-6 py-4">
                      2025/06/25
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/detallealquiler" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETALLE</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


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
export default Principal
