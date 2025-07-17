const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require("./utils/db");
const shortenRoutes = require('./routes/shortUrlRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/shorten', shortenRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
