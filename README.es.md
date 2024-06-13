[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Reyes1921/backend-shortner-url/blob/main/README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/Reyes1921/backend-shortner-url/blob/main/README.es.md)

# Shortner Url (Backend)

API REST para acortar enlaces al más corto posible, pruébelo aquí [shortner-url-fast](https://shortner-url-fast.vercel.app/)

## Endpoints

- `POST` https://rjrr.vercel.app/short

`requieren un body con este contenido`

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

## Obtener el enlace acortado

`https://rjrr.vercel.app/:urlId`

## Tecnologías utilizadas

- NodeJs
- Express
- MongoDB

<div align="center">

![Static Badge](https://img.shields.io/badge/nodedotjs-5FA04E?style=flat&logo=nodedotjs&logoColor=ffffff)
![Static Badge](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=ffffff)
![Static Badge](https://img.shields.io/badge/mongodb-47A248?style=flat&logo=mongodb&logoColor=ffffff)

</div>

# Contact

- E-mail address: reyesjrondon@gmail.com
- [Portfolio](https://reyesrondon.vercel.app/)
- [Linkedin](https://www.linkedin.com/in/reyes-rondon/?locale=en_US)
