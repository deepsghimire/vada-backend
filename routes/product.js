const express = require('express');
const Product = require('../models/Product');

const multer = require('multer');
//for image field
let imagename;


let constant = {
  IMG_PATH_URL: "http://localhost:8000/uploads/"
}

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function(req, file, cb) {
    imagename =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname;
    cb(null, imagename);
  },
});



const upload = multer({ storage });

let router = express.Router();


router.get('/:id', async (req, res) => {
  let user = await Product.findById(req.params.id);
  user.image = constant.IMG_PATH_URL + user.image
  res.json(user)

})

router.get('/', async (req, res) => {
  let users = await Product.find();
  for (let u of users) {
    u.image = constant.IMG_PATH_URL + u.image
  }
  res.json({ users })
})



router.post('/', upload.single("image"), async (req, res) => {
  let user;
  try {
    user = await Product.create({ ...req.body, image: imagename });
  } catch (err) {
    console.log(err)
    res.json(err)
  }
  res.json(user)
})

router.put('/:id', async (req, res) => {
  await Product.findOneAndUpdate({ _id: req.params.id }, res.body);
  res.json({ message: 'success' })

})

router.delete("/:id", async (req, res) => {
  await Product.findOneAndDelete({ _id: req.params.id });
  res.json({ message: 'success' })
})


module.exports = router;
