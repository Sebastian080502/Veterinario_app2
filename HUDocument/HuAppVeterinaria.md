# BACKLOG - App de Gestión de Veterinaria

Creamos las **Historias de Usuario (HU)** con sus **criterios de aceptacion** y **escenarios**.

---

## MODULO 1 - USUARIOS

### HU-01: Ver lista de usuarios
**Descripcion**
Como administrador del sistema,  
quiero visualizar una lista de usuarios registrados,  
para gestionarlos facilmente y conocer su estado actual.

**Criterio de aceptacion**  
Given que el administrador accede al modulo de usuarios  
When la vista se carga correctamente  
Then el sistema debe mostrar una lista de usuarios con su nombre, rol y estado.

**Escenarios**  
- Visualizacion de lista de usuarios  
- Mostrar datos basicos y estado activo/inactivo  

---

### HU-02: Registrar usuario
**Descripcion**  
Como administrador del sistema,  
quiero registrar nuevos usuarios mediante un formulario,  
para agregar personal al sistema con datos validos.

**Criterio de aceptacion**  
Given que el administrador esta en la lista de usuarios  
When presiona (Agregar usuario) y completa los campos correctamente  
Then el sistema debe guardar el nuevo usuario y mostrarlo en la lista actualizada.

**Escenarios**  
- Registro exitoso  
- Validacion de campos obligatorios  

---

### HU-03: Editar usuario
**Descripcion**  
Como administrador del sistema,  
quiero editar la informacion de un usuario existente,  
para mantener sus datos actualizados.

**Criterio de aceptacion**  
Given que el administrador selecciona un usuario  
When presiona (Editar)y modifica la informacion  
Then el sistema debe guardar los cambios y actualizar la lista.

**Escenarios**  
- Edicion de datos exitosa  
- Validacion de campos modificados  

---

### HU-04: Ver detalle de usuario
**Descripcion**  
Como administrador del sistema,  
quiero ver el detalle completo de un usuario,  
para consultar su informacion general y de contacto.

**Criterio de aceptacion**  
Given que el administrador selecciona un usuario  
When accede al detalle  
Then el sistema debe mostrar todos los datos del usuario seleccionado.

**Escenarios**  
- Consulta de detalle exitosa  
- Visualizacion de informacion completa  

---

## MODULO 2 - MASCOTAS

### HU-05: Ver lista de mascotas
**Descripcion**  
Como veterinario o asistente,  
quiero ver una lista de mascotas registradas,  
para identificar rapidamente sus datos principales.

**Criterio de aceptacion**  
Given que el usuario accede al modulo de mascotas  
When se carga la pantalla  
Then debe mostrar una lista con nombre, especie y propietario.

**Escenarios**  
- Visualizacion general de mascotas  
- Datos monimos visibles  

---

### HU-06: Registrar mascota
**Descripcion**  
Como veterinario o asistente,  
quiero registrar una nueva mascota mediante un formulario dinamico,  
para mantener actualizada la base de datos clinica.

**Criterio de aceptacion**  
Given que el usuario esta en el modulo de mascotas  
When presiona (Agregar mascota) y completa los campos validos  
Then el sistema debe registrar la mascota y mostrarla en la lista.

**Escenarios**  
- Registro exitoso de mascota  
- Validacion de campos faltantes  

---

### HU-07: Editar mascota
**Descripcion**  
Como veterinario o asistente,  
quiero editar la informacion de una mascota existente,  
para corregir o actualizar sus datos clinicos.

**Criterio de aceptacion**  
Given que el usuario visualiza la lista de mascotas  
When selecciona una mascota y presiona (Editar)  
Then el sistema debe guardar los cambios realizados correctamente.

**Escenarios**  
- Edicion exitosa  
- Actualizacion reflejada en la lista  

---

### HU-08: Ver detalle de mascota
**Descripcion**  
Como veterinario o asistente,  
quiero ver el detalle de una mascota,  
para revisar su informacion clinica y general.

**Criterio de aceptacion**  
Given que el usuario selecciona una mascota  
When accede a la vista de detalle  
Then el sistema debe mostrar datos como edad, raza, estado de salud y propietario.

**Escenarios**  
- Consulta de detalle exitosa  
- Informacion clinica completa  

---

## MODULO 3 – TIPOS DE MASCOTAS

### HU-09: Listar tipos de mascotas
**Descripcion**  
Como administrador,  
quiero ver los tipos de mascotas disponibles,  
para clasificarlas correctamente.

**Criterio de aceptacion**  
Given que el administrador accede al modulo de tipos de mascotas  
When se carga la vista  
Then debe mostrar una lista con nombre e icono de cada tipo.

**Escenarios**  
- Visualizacion de tipos disponibles  
- Icono representativo visible  

---

### HU-10: Crear tipo de mascota
**Descripcion**  
Como administrador,  
quiero crear un nuevo tipo de mascota,  
para ampliar las opciones de clasificacion.

**Criterio de aceptacion**  
Given que el administrador presiona (Agregar tipo)  
When completa el formulario con nombre e icono  
Then el sistema debe registrar el nuevo tipo correctamente.

**Escenarios**  
- Creacion exitosa de tipo  
- Validacion de campos  

---

### HU-11: Editar tipo de mascota
**Descripcion**  
Como administrador,  
quiero editar un tipo de mascota existente,  
para actualizar su informacion visual o textual.

**Criterio de aceptacion**  
Given que el administrador selecciona un tipo de mascota  
When presiona (Editar) y modifica los datos  
Then el sistema debe guardar los cambios y actualizar la vista.

**Escenarios**  
- Edicion exitosa  
- Actualizacion de icono o nombre  

---

## MODULO 4 – PRODUCTOS

### HU-12: Listar productos
**Descripcion**  
Como veterinario o administrador,  
quiero ver una lista de productos disponibles,  
para conocer su precio e imagen de presentacion.

**Criterio de aceptacion**  
Given que el usuario accede al modulo de productos  
When se carga la pantalla  
Then el sistema debe mostrar un grid con imagen, nombre y precio de cada producto.

**Escenarios**  
- Lista cargada exitosamente  
- Visualizacion de productos disponibles  

---

### HU-13: Ver detalle de producto
**Descripcion**  
Como veterinario o administrador,  
quiero ver el detalle de un producto,  
para revisar su descripcion, categoria y stock.

**Criterio de aceptacion**  
Given que el usuario selecciona un producto  
When accede al detalle  
Then el sistema debe mostrar informacion completa del producto.

**Escenarios**  
- Consulta de detalle exitosa  
- Visualizacion de stock y categoria  

---

### HU-14: Crear producto
**Descripcion**  
Como administrador,  
quiero crear un nuevo producto con su categoria,  
para ampliar el inventario de la veterinaria.

**Criterio de aceptacion**  
Given que el administrador presiona (Agregar producto)  
When completa los campos del formulario  
Then el sistema debe registrar el producto y mostrarlo en la lista.

**Escenarios**  
- Creacion de producto exitosa  
- Validacion de datos requeridos  

---

### HU-15: Editar producto
**Descripcion**  
Como administrador,  
quiero editar la informacion de un producto,  
para actualizar su precio, stock o descripcion.

**Criterio de aceptacion**  
Given que el administrador selecciona un producto  
When presiona (Editar) y modifica los datos  
Then el sistema debe guardar los cambios correctamente.

**Escenarios**  
- Edicion de producto exitosa  
- Actualizacion reflejada en la lista  

---

## MODULO 5 – CATEGORIAS

### HU-16: Listar categorias
**Descripcion**  
Como administrador,  
quiero ver la lista de categorias de productos,  
para organizar el inventario por tipo o uso.

**Criterio de aceptacion**  
Given que el administrador accede al modulo de categorias  
When se carga la vista  
Then debe mostrar la lista con nombre e icono de cada categoria.

**Escenarios**  
- Visualizacion de categorias  
- Icono visible en cada registro  

---

### HU-17: Crear categoria
**Descripcion**  
Como administrador,  
quiero crear nuevas categorias,  
para clasificar mejor los productos.

**Criterio de aceptacion**  
Given que el administrador presiona (Agregar categoria)  
When completa el formulario con los datos requeridos  
Then el sistema debe registrar la nueva categoria y mostrarla en la lista.

**Escenarios**  
- Creacion exitosa  
- Validacion de campos obligatorios  

---

### HU-18: Editar categoria
**Descripcion**  
Como administrador,  
quiero editar una categoria existente,  
para actualizar su nombre o icono.

**Criterio de aceptacion**  
Given que el administrador selecciona una categoria  
When presiona (Editar) y realiza cambios  
Then el sistema debe guardar la informacion actualizada.

**Escenarios**  
- Edicion de categoria exitosa  
- Actualizacion visual inmediata  
