export const proyectos = [
    {
        id: 3,
        title: 'Portfolio',
        description: 'Portfolio web personal desarrollado con React y Tailwind CSS, que muestra mi experiencia, habilidades y proyectos como desarrollador web full-stack.',
        imagenes: [
            {id:4, ruta:'/imgs/portafolio.png'},
        ],
        tags: [
            'tailwind','react','javascript'
        ],
        link: '',
        github: 'https://github.com/manuelcastro95/portfolio'
    },
	{
		id: 1,
		title: 'Restaurante',
		description:
			'aplicación restaurante realizada en node js y react',
        imagenes: [
            {id:1, ruta:'/imgs/restaurante-1.png'},
            {id:2, ruta:'/imgs/restaurante-2.png'},
            {id:3, ruta:'/imgs/restaurante-3.png'},
            {id:4, ruta:'/imgs/restaurante-4.png'},
        ],
        tags: [
            'react','node js', 'express js', 'tailwind'
        ],
        link: '',
        github: 'https://github.com/manuelcastro95/restaurante'
        
	},
    {
		id: 2,
		title: 'SmartMemo AI',
		description:
			'SmartMemo AI convierte reuniones en resúmenes y puntos de acción utilizando transcripción de voz y procesamiento de lenguaje natural.',
        imagenes: [
            {id:4, ruta:'/imgs/smartmemo.png'},
        ],
        tags: [
            'tailwind','node js','express js','react','aws','chatgpt'
        ],
        link: '',
        github: 'https://github.com/manuelcastro95/smartmemo-ia'
	},
    // {
	// 	id: 4,
	// 	title: 'MentiaCare',
	// 	description:
	// 		'MentiaCare es una plataforma de salud mental diseñada para ofrecer apoyo accesible y efectivo. Nuestra misión es facilitar la conexión de los usuarios con profesionales de la salud mental, brindar acceso a recursos de bienestar, y fomentar el autocuidado y el equilibrio emocional.',
    //     imagenes: [
    //         {id:5, ruta:'/imgs/default.webp'},
    //     ],
    //     tags: [
    //         'laravel','mysql','bootstrap', 'javascript','css'
    //     ],
    //     link: '',
    //     github: 'https://github.com/manuelcastro95/control_asistencias'
	// },
    {
		id: 5,
		title: 'Control asistencia',
		description:
			'Sistema de control de asistencia de alumnos mediante código QR, asignado a cada alumno que se registre en la plataforma por el administrador, utilizando la webcam para leer el código QR.',
        imagenes: [
            {id:5, ruta:'/imgs/control-assitencias.png'},
        ],
        tags: [
            'laravel','mysql','bootstrap', 'javascript','css'
        ],
        link: '',
        github: 'https://github.com/manuelcastro95/control_asistencias'
	}
]