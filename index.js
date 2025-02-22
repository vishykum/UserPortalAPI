const express = require('express');
const cors = require('cors');
const app = express();
const loginRouter = require('./api/loginAPI');

app.use(cors());

//Routes
app.use('/login', loginRouter);

app.listen(3000, () => {
    console.log("Server running on PORT 3000");
})


