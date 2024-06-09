export const proyectos = [
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
		title: 'Modelo de priorizacion Matematica',
		description:
			'aplicativo modelo matematico para priorizacion de casos de uso / historias de usuario',
        imagenes: [
            {id:4, ruta:'/imgs/default.webp'},
        ],
        tags: [
            'tailwind','laravel','mysql','react'
        ],
        link: '',
        github: 'https://github.com/manuelcastro95/ModeloMatematicoPriorizacion'
	},
    {
		id: 3,
		title: 'Control asistencia',
		description:
			'Sistema de control de asistencia de alumnos mediante código QR, asignado a cada alumno que se registre en la plataforma por el administrador, utilizando la webcam para leer el código QR.',
        imagenes: [
            {id:5, ruta:'/imgs/default.webp'},
        ],
        tags: [
            'laravel','mysql','bootstrap', 'javascript','css'
        ],
        link: '',
        github: 'https://github.com/manuelcastro95/control_asistencias'
	}
]