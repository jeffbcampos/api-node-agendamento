import { app } from "./app";
import express from "express";
import { createUserRouter } from "./routes/createUser";
import { OAuthRouter } from "./routes/authUser";
import { authMiddleware } from "./routes/authMiddleware";

app.use(express.json());

app.use(createUserRouter)
app.use(OAuthRouter)

app.get("/verificationToken", authMiddleware, (req, res) => {
    return res.status(200).json({ token: "Verified" })
})

app.listen(3333, ()=> {
    console.log("Server is running on port 3333");
})
