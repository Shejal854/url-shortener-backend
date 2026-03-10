const express = require("express");
const router = express.Router();
const { createShortUrl, deleteUrl } = require("../controllers/urlController");

router.post("/shorten", createShortUrl);
router.delete("/:shortCode", deleteUrl);

module.exports = router;