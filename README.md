[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Reyes1921/backend-shortner-url/blob/main/README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/Reyes1921/backend-shortner-url/blob/main/README.es.md)

# Shortner Url (Backend)

REST API to shorten links to the shortest possible one, try it here [shortner-url-fast](https://shortner-url-fast.vercel.app/)

## Endpoints

- `POST` https://rjrr.vercel.app/short

`require a body with this content`

```

{
    "originalUrl" : "https://www.example.com/"
}

```

`response`

```
 "urlId": "...",
 "originalUrl": "...",
 "shortUrl": "...",
 "clicks": 0,
 "date": "...",
 "_id": "...",
 "__v": 0
```

## Get the shortened link

`https://rjrr.vercel.app/:urlId`

## Technologies used

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
