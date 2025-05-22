import Swal from 'sweetalert2'

function Login() {

    const autentificacion = () => {

        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
    }

    return (
        <>
            <form id='f_login'>
                <div className="w-full h-screen flex items-center justify-center">
                    <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
                        <img src="/logo.png" alt="logo" className="w-12 md:w-14" />
                        <h1 className="text-lg md:text-xl font-semibold text-white ">Biblioteca</h1>
                        <p className="text-xs md:text-sm text-gray-500 text-center">
                             <span className="text-white"></span>
                        </p>
                        <div className="w-full flex flex-col gap-3">
                            <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
                                <input type="text" placeholder="usuario" id='user' name='user'
                                    className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white" />
                            </div>
                            <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl relative">
                                <input
                                    type="password" id='pass' name='pass'
                                    placeholder="Contraseña"
                                    className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white" />
                            </div>
                            <button  type='button' className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-sm md:text-base" onClick={autentificacion}>
                                Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login
