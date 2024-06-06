import express from "express"
import Url from "../../models/Url.js"
const router = express.Router()

router.get("/:urlId", async (req, res) => {
  try {
    const url = await Url.findOne({urlId: req.params.urlId})
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        {$inc: {clicks: 1}}
      )
      return res.redirect(url.originalUrl)
    } else res.redirect(process.env.BASE_FRONT)
  } catch (err) {
    res.redirect(process.env.BASE_FRONT)
  }
})

export default router
