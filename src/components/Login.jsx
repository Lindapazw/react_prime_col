

const Login = () => {
    return (
        <div class="bg-white mx-5 mt-20 shadow-md rounded-md md:mx-96">
            <div className="flex justify-center mb-2 ">
                <img className="h-14 mt-4" 
                src="/src/img/COLEGIO-DE-PSICOLOGOS-PROVINCIA-DE-SALTA-FINAL-1-01.png" alt="logo" />
            </div>
            <h2 className="text-center font-bold text-2xl mb-4 ">¡Bienvenido!</h2>
            <p className="ml-5 font-semibold text-gray-500 "> 
                Completa todos los campos
            </p>

            <form action="" 
            className="mt-5">

                <div className="ml-5 mr-5"> 
                    <label
                    className=" font-semibold ml-1"
                    >Matricula:</label>

                    <input type="text" placeholder="Escribe tu matricula" 
                    className="block w-full mt-1 p-2 mb-4"/>
                </div>

                <div className="ml-5 mr-5"> 
                    <label
                    className=" font-semibold ml-1"
                    >Contraseña:</label>

                    <input type="text" placeholder="Escribe tu contraseña" 
                    className="block w-full mt-1 p-2 mb-4"/>
                </div>

                <div className="mx-5 ">
                    <button className="bg-violet-400 w-full p-2 rounded-md mb-5 text-white uppercase font-semibold hover:bg-violet-600"> Ingresar </button>
                </div>
                


            

            </form>
        </div>
    )
    }

export default Login
