const express = require('express')
const dotenv = require("dotenv/config");
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const morgan = require('morgan')
const productRoutes = require('./routes/product')

const app = express();



app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("backend is working 👋");
});

app.use('/user', userRoutes);
app.use('product', productRoutes);

app.listen(process.env.PORT || 8000, async () => {
  console.log("Server has started");
  try {
    mongoose.connect(process.env.conn_str);
    console.log("Successfully Connected to db 🚀🚀");
  } catch (err) {
    console.log("❌❌Error during connection to database❌❌:", err);
  }
});
