
const express = require("express");
const app = express();
const login = require('./routers/login')
const leadmaster = require('./routers/leadmaster')
const employees = require('./routers/employees')
const Productsmaster = require('./routers/Productsmaster')
const doc = require('./routers/doc')
const singup = require('./routers/singup')
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use('/login', login);
app.use('/leadmaster', leadmaster);
app.use('/employees', employees);
app.use('/Productsmaster', Productsmaster);
app.use('/doc', doc);
app.use('/singup', singup);
app.listen(8001, () => {

    console.log("Yey, your server is running on port 3000")
});
