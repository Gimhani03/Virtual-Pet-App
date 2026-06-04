const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const petRoutes = require("./routes/petRoutes");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pets", petRoutes);

app.get("/", (req, res) => {
  res.send("Virtual Pet API Running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});