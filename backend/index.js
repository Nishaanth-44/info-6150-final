const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRouter = require("./routes/ProductRoutes");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', //To add the localhost of react
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
 
app.listen(3001, () => {
  console.log("Running your final project server in 3001");
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://info-6150-final:info6150final@cluster0.jfxj8mz.mongodb.net/info-6150-final",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);


 
app.use("/api/products", productRouter);

module.exports = app;