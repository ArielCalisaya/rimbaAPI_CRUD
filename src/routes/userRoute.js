const User = require("../model/uADM");
const express = require("express");
const router = express.Router();

let response = {};

// Get all user from DB
router.route("/all").get((req, res) => {
  User.find({}, (err, data) => {
    // Fetch all data from collection
    if (!err) {
      response = { error: false, msg: data };
    } else {
      response = { error: true, msg: "Error fetching data, try your best ;D" };
    }
    res.json(response);
  });
});

// Get user by id
router.route("/user/:id").get((req, res) => {
  let id = req.params.id;

  User.findById(id, (err, data) => {
    // Fetch user data by id
    if (err) {
      response = { error: true, msg: "Error fetching data, try your best ;D" };
    } else {
      response = { error: false, msg: data };
    }
    res.json(response);
  });
});

//  Create new User
router.route("/user/new").post((req, res) => {
  let db = new User();
  let encriptIt = require("crypto").createHash("md5");
  db.name = req.body.name;
  db.email = req.body.email;
  db.password = encriptIt.update(req.body.password).digest("base64");
  db.save((err) => {
    if (err) {
      response = { error: true, msg: "Error creating user" };
    } else {
      response = { error: false, msg: "User created Succesfully ;D" };
    }
    res.json(response);
  });
});

// Change user information
router.route("/change/:id").put((req, res) => {
  let id = req.params.id;

  User.findById(id, (err, data) => {
    if (err) {
      response = { error: true, msg: "Error fetching data" };
    } else {
      if (req.body.email !== undefined) {
        data.email = req.body.email;
      }
      if (req.body.name !== undefined) {
        data.name = req.body.name;
      }
      if (req.body.password !== undefined) {
        data.password = req.body.password;
      }
      if (req.body.isADM !== undefined) {
        data.isADM = req.body.isADM;
      }
      // save data
      data.save((err) => {
        if (err) {
          response = { error: true, msg: "Error updating data" };
        } else {
          response = { error: false, msg: "Data succesfully changed" };
        }
        res.json(response);
      });
    }
  });
});

// Delete user
router.route("/delete/:id").delete((req, res) => {
  let response = {};
  let id = req.params.id;
  User.findById(id, (err, data) => {
    // Delete user data by id
    if (err) {
      response = { error: true, msg: "Error fetching data, try your best ;D" };
    } else {
      // data exist? remove it.
      User.remove({ _id: id }, (err) => {
        if (err) {
          response = { error: true, msg: "Error deleting data :C" };
        } else {
          response = { error: true, msg: `${id} has been removed` };
        }
        res.json(response);
      });
    }
  });
});

// Make User Test from schema
router.get("/createADM", async (req, res) => {
  try {
    const user = new User({
      name: "exampeledmidq",
      email: "exampeledmidq@gmail.com",
      password:
        "29045pof4po2,eo120'e1e2Portamemememoonnldelp2034903.,.,.SSSavedok",
      isADM: false,
    });
    await user.save();
    res.send(user);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = router;
