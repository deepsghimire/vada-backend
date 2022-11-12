const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/user')

const app = express()
const port = 3000

//middlewares
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
