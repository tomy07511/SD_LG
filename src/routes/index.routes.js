const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderHome, renderpedir, renderInfo,renderdatos } = require("../controllers/index.controller");
const {guardarDtos } = require("../controllers/Dtos.controller")


router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/home", renderHome);
router.get("/pedir", renderpedir);
router.get("/Info", renderInfo);
router.get("/datos", renderdatos);
router.post("/Dtos", guardarDtos);
router.get("/Dtos", guardarDtos);

module.exports = router;
