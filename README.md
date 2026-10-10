# Express Mongo Cloud

API REST de usuarios del laboratorio de la semana 08, implementada con Express y MongoDB Atlas.

## Ejecucion local

1. Ejecutar `npm ci`.
2. Copiar `.env.example` a `.env` y completar `MONGO_URI` con la conexion a Atlas.
3. Ejecutar `npm run dev`.

## Endpoints

| Metodo | Ruta | Funcion |
| --- | --- | --- |
| GET | /api/users | Listar usuarios |
| GET | /api/users/:id | Consultar un usuario |
| POST | /api/users | Crear un usuario con name y email |
| PUT | /api/users/:id | Actualizar un usuario |
| DELETE | /api/users/:id | Eliminar un usuario |

API publicada: https://express-mongo-cloud-k7rm.onrender.com/api/users

## Integracion y despliegue continuo

El workflow `.github/workflows/deploy.yml` se ejecuta al actualizar `main` y en pull requests hacia esa rama. Instala las dependencias con `npm ci`, comprueba la sintaxis de JavaScript y verifica las importaciones del API sin necesitar credenciales de MongoDB.

Cuando las validaciones pasan en `main`, GitHub Actions invoca el Deploy Hook de Render para publicar el commit validado. El hook se conserva en el secret `RENDER_DEPLOY_HOOK_URL`; no debe agregarse al codigo ni al archivo `.env.example`.

El disparo por commit de Render esta desactivado para que GitHub Actions controle el despliegue. Actions confirma que Render acepto la solicitud; el resultado final de la publicacion se consulta en el dashboard de Render.

Las credenciales reales y `node_modules` estan excluidos mediante `.gitignore`.
