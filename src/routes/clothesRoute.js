const Clothes = require("../model/clothes");
const express = require("express");
const router = express.Router();

router.get("/getAll", (req, res) => {});

// Create Example Clothe on DB
router.get("/create", async (req, res) => {
  try {
    const clothes = new Clothes({
      tipo: "Jogger",
      color: "Verde Oscuro",
      precio: 7000,
      imagen: "defaultttere",
      talla_S: {
        cantidad: 3,
      },
      talla_M: {
        cantidad: 6,
      },
      talla_L: {
        cantidad: 9,
      },
    });
    const newClothes = await clothes.save();
    res.send(clothes);
  } catch (error) {
    res.status(301).send({ msg: error.message });
  }
});

router.post("/post", (req, res) => {
  res.send("post function here");
});
router.put("/put", (req, res) => {
  res.send("put function here");
});
router.delete("/delete", (req, res) => {
  res.send("delete function here");
});

module.exports = router;
