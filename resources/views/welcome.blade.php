<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Manuel Castro Dev @yield('title')</title>
    @vite('resources/css/app.css')

    <link rel="shortcut icon" href="{{ asset('assets/favicon.ico') }}" type="image/x-icon">
</head>

<body class=" bg-fondo box-border font-sans">
    <main class="w-full container mx-auto">
        <!-- Usamos grid-cols-1 para que haya una sola columna en pantallas pequeñas -->
        <div class="w-full grid grid-cols-1 gap-2 grid-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 pt-8">

            <div class=" h-full">
                {{-- Informacion de perfil --}}
                <div class="w-full">

                    {{-- foto --}}
                    <div class="mx-auto shadow-xl bg-slate-50 border border-slate-300 z-40 xl:absolute xl:top-14 xl:left-64 rounded-2xl w-1/2 cst2:w-40 cst2:h-40 cst:w-44 cst:h-44 sm:w-64 h-64 md:w-44 md:h-44 flex items-center justify-center overflow-hidden">
                        <img class="object-cover object-center h-52 " src="{{ asset('assets/imagenes/foto.jpg') }}" alt="">
                    </div>

                    {{-- Informacion general --}}
                    <div class="xl:relative bg-white border pb-3 border-slate-300 lg:mt-44 2xl:mt-44 xl:mt-44 md:mt-15 rounded-xl z-0 w-full mx-auto sm:w-96  md:w-80">
                        <div class="w-72 mx-auto mt-9 grid grid-cols-1" id="datos-desarrolador">

                            <div>
                                <p class="text-center">Manuel Castro</p>
                                <p class="text-center mt-1 mb-1">
                                    Full Stack Developer
                                </p>
                                <p class="text-center">
                                    LARAVEL | MYSQL | HTML | CSS | JAVASCRIPT | BOOTSTRAP | TAILWIND
                                </p>
                            </div>

                            {{-- Botones Redes --}}
                            <div class="mx-auto mt-2 w-40">
                                <button onclick="window.open('https://github.com/manuelcastro95','_blank')" type="button"  class="bg-sky-600 w-9 h-9 rounded-lg">
                                    <i class="fa-brands fa-github"></i>
                                </button>
                                <button type="button" onclick="window.open('https://www.linkedin.com/in/manuel-castro-minotta/','_blank')" class="bg-sky-600 w-9 h-9 rounded-lg">
                                    <i class="fa-brands fa-linkedin"></i>
                                </button>
                                <button type="button" onclick="window.open('https://www.manuelcastro.dev/','_blank')" class="bg-sky-600 w-9 h-9 rounded-lg">
                                    <i class="fa-solid fa-globe"></i>
                                </button>
                            </div>

                            {{-- Informacion basica --}}
                            <div class="transition ease-in duration-300 hover:-translate-y-1  hover:scale-125  hover:bg-sky-200  border border-slate-300 rounded-lg bg-sky-50 h-20 w-full mt-6 shadow-sm ">
                                <button type="button" class="bg-sky-600 w-9 h-9 rounded-lg  mt-5 ml-4">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </button>
                                <span>+57 317 250 1811</span>
                            </div>
                            <div class=" transition ease-in duration-300 hover:-translate-y-1  hover:scale-125  hover:bg-sky-200  border border-slate-300  rounded-lg bg-sky-50 h-20 w-full mt-2.5 shadow-sm ">
                                <button type="button" class="bg-sky-600 w-9 h-9 rounded-lg  mt-5 ml-4">
                                    <i class="fa-regular fa-envelope"></i>
                                </button>
                                <span>manuelcastro911@gmail.com</span>
                            </div>
                            <div class=" transition ease-in duration-300 hover:-translate-y-1  hover:scale-125  hover:bg-sky-200  border border-slate-300  rounded-lg bg-sky-50 h-20 w-full mt-2.5 shadow-sm ">
                                <button type="button" class="bg-sky-600 w-9 h-9 rounded-lg  mt-5 ml-4">
                                    <i class="fa-solid fa-location-dot"></i>
                                </button>
                                <span>Cali, Colombia</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full mt-16 cst2:mt-3 cst:mt-3 sml:mt-3 med:mt-3 lrg:mt-3 sm:mt-3 md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-16">
                {{-- Menus --}}
                <div
                    class="grid gap-4 cst:grid-cols-2 sml:grid-cols-2 med:grid-cols-4 lrg:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">
                    <div
                        class="w-28 h-28 rounded-xl cst2:ml-12 cst:ml-4 sml:ml-6 med:w-10/12 med:h-14 lrg:w-12 lrg:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-red-600 ">
                        <a href="#">
                            <i class="fa-solid fa-user-tie"></i>
                            sobre mi
                        </a>
                    </div>
                    <div
                        class="w-28 h-28 rounded-xl cst2:ml-12 cst:ml-4 sml:ml-6 med:w-10/12 med:h-14 lrg:w-12 lrg:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-red-600 ">
                        <a href="#">
                            <i class="fa-solid fa-file-lines"></i>
                            resumen
                        </a>
                    </div>
                    <div
                        class="w-28 h-28 rounded-xl cst2:ml-12 cst:ml-4 sml:ml-6 med:w-10/12 med:h-14 lrg:w-12 lrg:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-red-600 ">
                        <a href="#">
                            <i class="fas fa-briefcase"></i>
                            trabajos
                        </a>
                    </div>
                    <div
                        class="w-28 h-28 rounded-xl cst2:ml-12 cst:ml-4 sml:ml-6 med:w-10/12 med:h-14 lrg:w-12 lrg:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-red-600 ">
                        <a href="#">
                            contacto
                            <i class="fa-solid fa-address-book"></i>
                        </a>
                    </div>
                </div>

                {{-- Contenido --}}
                <div class="bg-white border pb-3 p-5 border-slate-300 rounded-lg w-full mt-5">
                    <h1>Sobre Mi</h1>
                    <hr>
                    <p class="text-justify mt-3">
                        Técnico en programación de software con conocimiento y experiencia en: 
                        Desarrollo de software elaboración de interfaz de usuario, maquetación, desarrollo de modulos de acuerdo a la especificaciones, 
                        conexión a bases de datos, creación de Api Rest y soporte, por medio de tecnologías como php, laravel, Css, Html, vue js, Javascript. 
                    </p>

                    <h2 class="mt-5">Que Hago</h2>
                    <hr>
                    <div class="grid grid-cols-2 w-full mt-3 gap-2">
                        <div class="bg-slate-200 border mx-auto border-slate-200 w-64 h-44"></div>
                        <div class="bg-slate-200 border mx-auto border-slate-200 w-64 h-44"></div>
                        <div class="bg-slate-200 border mx-auto border-slate-200 w-64 h-44"></div>
                        <div class="bg-slate-200 border mx-auto border-slate-200 w-64 h-44"></div>
                    </div>
                    <h2 class="mt-5 text-center">Proyectos</h2>
                    <hr>
                    
                    <div class="grid grid-cols-2 w-full mt-3 gap-2">
                        <div class="bg-slate-200 border mx-auto border-slate-200 w-64 h-44"></div>
                        <div class="bg-slate-200 border mx-auto border-slate-200 w-64 h-44"></div>
                    </div>
                </div>  
            </div>


        </div>

    </main>
    <script src="https://kit.fontawesome.com/4ab0fcabab.js" crossorigin="anonymous"></script>
</body>

</html>
