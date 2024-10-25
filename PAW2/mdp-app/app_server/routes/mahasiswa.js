const express = require("express");
const router = express.Router();
router.get("/mahasiswa",mahasiswaController.Index);
module.exports = router;