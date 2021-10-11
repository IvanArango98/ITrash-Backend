const express = require("express")
const router = express.Router()
const Server = require("../Controllers/server")

router.post("/ApiCreate",Server.Create)
router.get("/Api-Read",Server.Read)
router.delete("/Api-Delete",Server.Delete)
router.put("/Api-Update",Server.Update)

module.exports = router