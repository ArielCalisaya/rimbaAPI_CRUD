const Clothes = require("../model/clothes");
const express = require("express");
const router = express.Router();

let response = {};

// Create New Clothes
router.route("/new").post((req, res) => {
  let db = new Clothes();
  db.tipo = req.body.tipo;
  db.color = req.body.color;
  db.precio = req.body.precio;
  db.imagen = req.body.imagen;

  db.talla_S = req.body.talla_S;
  db.talla_M = req.body.talla_M;
  db.talla_L = req.body.talla_L;

  db.save((err) => {
    if (err) {
      response = { error: true, msg: err };
    } else {
      response = { error: true, msg: "New clothe Succesfully created" };
    }
    res.json(response);
  });
});

// Create Example Clothe on DB
router.get("/create", async (req, res) => {
  try {
    const clothes = new Clothes({
      tipo: "Jogger",
      color: "Verde Claro",
      precio: 7000,
      imagen: "etc/noimg",
      talla_S: {
        cantidad: 13,
      },
      talla_M: {
        cantidad: 16,
      },
      talla_L: {
        cantidad: 19,
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
