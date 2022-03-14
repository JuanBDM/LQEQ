const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require("./routes/mainRouter");
const productsRouter = require("./routes/productsRouter")


app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => {
    console.log("El servidor de LQEQ esta corriendo en: http://localhost:3000/")
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));


app.use("/productos", productsRouter);
app.use("/", mainRouter);

