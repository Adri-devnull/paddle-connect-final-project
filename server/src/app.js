const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const bookingRoutes = require("./routes/booking.routes");
const messageRoutes = require("./routes/message.routes");
const cookieParser = require("cookie-parser");
const gameRoutes = require("./routes/game.routes");

require("dotenv").config();

// Rutas

// Middlewares para cliente
// Opciones avanzadas de configuración de CORS
const corsOptions = {
  origin: "http://localhost:5173", // Dominios autorizados
  methods: "*", // Métodos permitidos
  optionsSuccessStatus: 204,
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// USO DE RUTAS
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/games", gameRoutes);

// Uso de rutas
const startServer = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DATABASE}`
    );
    console.log("Connection to database");
    app.listen(3000, () =>
      console.log("Servidor en ejecución en el puerto 3000")
    );
  } catch (err) {
    console.log("CONECTION ERROOOOR", err);
  }
};

startServer();
