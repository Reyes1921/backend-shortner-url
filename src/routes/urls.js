import express from "express"
import {nanoid} from "nanoid"
import Url from "../../models/Url.js"
import {validateUrl} from "../../utils/utils.js"
import dotenv from "dotenv"
dotenv.config({path: "../config/.env"})

const router = express.Router()

// Short URL Generator
router.post("/short", async (req, res) => {
  const {originalUrl} = req.body
  const base = process.env.BASE

  const urlId = nanoid(6)
  if (validateUrl(originalUrl)) {
    try {
      let url = await Url.findOne({originalUrl})
      if (url) {
        res.json(url)
      } else {
        const shortUrl = `${base}/${urlId}`

        url = new Url({
          originalUrl,
          shortUrl,
          urlId,
          date: new Date(),
        })

        await url.save()
        res.json(url)
      }
    } catch (err) {
      console.log(err)
      res.status(500).json("Server Error")
    }
  } else {
    res
      .status(400)
      .json(
        "Invalid url please try one with a valid pattern, Example: https://www.example.com/"
      )
  }
})

export default router
