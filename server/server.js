import express from "express";
import mongoose from "mongoose";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

import userRoutes from "./routes/user.js";
import budgetRoutes from "./routes/budget.js";
// const userRoutes = require("./routes/user");
// const budgetRoutes = require("./routes/budget");

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use("/api/user", userRoutes);
app.use("/api/budget", budgetRoutes);

// connect to db (need to get url has not been put in .env yet)
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(
                "connected to db & listening on port",
                process.env.PORT
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
