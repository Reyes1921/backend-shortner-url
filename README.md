[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Reyes1921/backend-shortner-url/blob/main/README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/Reyes1921/backend-shortner-url/blob/main/README.es.md)

# Shortner Url (Backend)

API to shorten links to the shortest possible one, try it here [shortner-url-fast](https://shortner-url-fast.vercel.app/)

## 📍 Endpoints

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

## 🔗 Get the shortened link

`https://rjrr.vercel.app/:urlId`

## 👨‍💻 Technologies used

- [**NodeJs**](https://nodejs.org/en) - open-source, cross-platform JavaScript runtime environment.
- [**Express**](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [**MongoDB**](https://www.mongodb.com/) - non-relational document database that provides support for JSON-like storage.
- [**mongoose**](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js.
- [**nanoid**](https://www.npmjs.com/package/nanoid) - A tiny, secure, URL-friendly, unique string ID generator for JavaScript.

<div align="center">

![Static Badge](https://img.shields.io/badge/nodedotjs-5FA04E?style=flat&logo=nodedotjs&logoColor=ffffff)
![Static Badge](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=ffffff)
![Static Badge](https://img.shields.io/badge/mongodb-47A248?style=flat&logo=mongodb&logoColor=ffffff)

</div>

# ✉️ Contact

- E-mail address: reyesjrondon@gmail.com
- [Portfolio](https://www.reyesrondon.dev/en)
- [Linkedin](https://www.linkedin.com/in/reyes-rondon/?locale=en_US)
