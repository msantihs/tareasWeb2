### Descripcion
Esta tarea consiste en el desarrollo de una API mediante Node + Express que permita al usuario administrar tareas a través de una base de datos en MongoDB.

Como administrador de tareas, el usuario debe tener la capacidad de crear tareas, listar las tareas existentes, editar una tarea (modificar datos o su status), ver los detalles de una tarea o eliminar una tarea existente. 

Para ello, se deberán realizar los endpoints necesarios para que el usuario tenga la capacidad de realizar las acciones (get, post, put) correspondientes.

Las tareas deberán ser almacenadas en MongoDB, por lo cual se deberá compartir dentro de la entrega (no subir al repositorio), la cadena de conexión utilizada y especificar donde debe ser actualizada. 

Tecnologías Utilizadas: 
- Express para las rutas 
- mongoose para acceso a la base de datos
- Swagger para documentación 
- dotenv para las variables de entorno 

Cada tarea deberá contar, por lo menos, con las siguientes propiedades:
- Título
- Descripción
- Status
- Fecha de creación (formato a elegir)

Comandos a correr: 
- npm install
- npm run dev 
- tambien se puede usar npm start 
