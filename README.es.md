[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Reyes1921/backend-shortner-url/blob/main/README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/Reyes1921/backend-shortner-url/blob/main/README.es.md)

# Shortner Url (Backend)

API para acortar enlaces al más corto posible, pruébelo aquí [shortner-url-fast](https://shortner-url-fast.vercel.app/)

## 📍 Endpoints

- `POST` https://rjrr.vercel.app/short

`requiere un body con este contenido`

```

{
    "originalUrl" : "https://www.example.com/"
}

```

`respuesta`

```
 "urlId": "...",
 "originalUrl": "...",
 "shortUrl": "...",
 "clicks": 0,
 "date": "...",
 "_id": "...",
 "__v": 0
```

## 🔗 Obtener el enlace acortado

`https://rjrr.vercel.app/:urlId`

## 👨‍💻 Tecnologías utilizadas

- [**NodeJs**](https://nodejs.org/es) - Entorno de ejecución de JavaScript multiplataforma y de código abierto.
- [**Express**](https://expressjs.com/es/) - Infraestructura web rápida, minimalista y flexible para Node.js.
- [**MongoDB**](https://www.mongodb.com/) - Base de datos documental no relacional que admite el almacenamiento tipo JSON.
- [**mongoose**](https://mongoosejs.com/) - Elegante modelado de objetos mongodb para node.js.
- [**nanoid**](https://www.npmjs.com/package/nanoid) - Un generador de ID de cadena único, pequeño, seguro y de URL amigable para JavaScript.

<div align="center">

![Static Badge](https://img.shields.io/badge/nodedotjs-5FA04E?style=flat&logo=nodedotjs&logoColor=ffffff)
![Static Badge](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=ffffff)
![Static Badge](https://img.shields.io/badge/mongodb-47A248?style=flat&logo=mongodb&logoColor=ffffff)

</div>

# ✉️ Contacto

- Correo electrónico: reyesjrondon@gmail.com
- [Portafolio](https://www.reyesrondon.dev/es)
- [Linkedin](https://www.linkedin.com/in/reyes-rondon/?locale=en_US)
