# Base de conocimiento - UniEmpleo

**Fecha:** 17/11/2026

## Error 1: Authentication failed

- **Síntomas:** No se puede conectar a MongoDB Atlas.
- **Causa:** Usuario o contraseña incorrectos.
- **Solución:** Verificar las credenciales en Database Access y actualizar la cadena de conexión.

## Error 2: Could not connect to any servers

- **Síntomas:** El backend no logra establecer conexión con el clúster.
- **Causa:** Problemas de red, clúster no disponible o dirección IP no autorizada.
- **Solución:** Verificar el estado del clúster, la conexión a Internet y los permisos de acceso de la IP.

## Error 3: Cannot find module 'mongoose'

- **Síntomas:** La aplicación muestra un error al iniciar.
- **Causa:** Mongoose no está instalado en el proyecto.
- **Solución:** Ejecutar `npm install mongoose`.

## Error 4: Invalid scheme

- **Síntomas:** No se puede iniciar la conexión con MongoDB.
- **Causa:** La URI tiene un formato incorrecto.
- **Solución:** Verificar que comience con `mongodb://` o `mongodb+srv://`.

## Error 5: IP not whitelisted

- **Síntomas:** MongoDB Atlas rechaza la conexión desde el equipo.
- **Causa:** La dirección IP no está autorizada.
- **Solución:** Agregar la IP actual en Network Access de MongoDB Atlas.

## Error 6: Cannot find module

- **Síntomas:** Node.js no puede encontrar un archivo o paquete requerido.
- **Causa:** Dependencia no instalada o ruta incorrecta.
- **Solución:** Revisar la ubicación del archivo o instalar el paquete faltante con npm.
