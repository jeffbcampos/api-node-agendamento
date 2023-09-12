import { app } from "./app";
import express from "express";
import { createUserRouter } from "./routes/createUser";
import { OAuthRouter } from "./routes/authUser";
import { authMiddleware } from "./useCase/authUseCase/authMiddleware";
import { port } from "./config/vars";
import { createScheduleRouter } from "./routes/createSchedule";

app.use(express.json());

app.use(createUserRouter)
app.use(OAuthRouter)
app.use(createScheduleRouter)

app.get("/verificationToken", authMiddleware, (req, res) => {
    return res.status(200).json({ token: "Verified" })
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})
