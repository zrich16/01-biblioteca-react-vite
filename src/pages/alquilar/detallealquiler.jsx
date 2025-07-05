import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';

import Swal from 'sweetalert2'

function DetalleAlquiler() {

  
    const btnGuardar = () => {
      Swal.fire({
        title: "",
        text: "Registro Exitoso",
        icon: "info"
      });

    }
  return (
    <div>
      <Header />
      <main style={styles.mainContent}>
        <div className="grid gap-6 mb-6 md:grid-cols-1">

          <div className="grid gap-12 mb-12 md:grid-cols-2">
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">

                <form action="#">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">NOMBRE CLIENTE </label>
                      <input type="text" name="nombreCliente" id="nombreCliente" readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="NOMBRE CLIENTE" required="" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">CLAVE CLIENTE </label>
                      <input type="text" name="claveCliente" id="claveCliente" readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="CLAVE CLIENTE" required="" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">CLAVE ALQUILER </label>
                      <input type="number" name="claveAlquiler" id="claveAlquiler" readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$CLAVE ALQUILER" required="" />
                    </div>
                    <div className="w-full">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">FECHA ALQUILER </label>
                      <input type="date" name="fechaAlquiler" id="fechaAlquiler" readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                    </div>
                    <div>
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">FECHA ENTREGA </label>
                      <input type="date" name="fechaEntrega" id="fechaEntrega" readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required="" />
                    </div>

                    <div className="relative max-w-sm">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </div>
                      <input id="default-datepicker" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
   focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="text-base font-blackmb-2 font-medium text-blue-800 dark:text-white">OBSERVACIONES</label>
                      <textarea id="description" rows="8" readOnly className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Observaciones"></textarea>
                    </div>

                    <div className="sm:col-span-2">
                      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={btnGuardar}>
                        <svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11 16h2m6.707-9.293-2.414-2.414A1 1 0 0 0 16.586 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707ZM16 20v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6h8ZM9 4h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z"/>
</svg>
                        <span className="sr-only">GUARDAR</span>
                      </button></div>

                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>


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
export default DetalleAlquiler
