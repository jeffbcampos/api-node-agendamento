import { app } from "./app";
import express from "express";
import { createUserRouter } from "./routes/createUser";
import { OAuthRouter } from "./routes/authUser";
import { port } from "./config/vars";
import { createScheduleRouter } from "./routes/createSchedule";
import { readScheduleRouter } from "./routes/schedules/readSchedule";
import { authMiddleware } from "./useCase/authUsecase/authMiddleware";

app.use(express.json());

app.use(createUserRouter)
app.use(OAuthRouter)
app.use(createScheduleRouter)
app.use(readScheduleRouter)

app.get("/verificationToken", authMiddleware, (req, res) => {
    return res.status(200).json({ token: "Verified" })
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})
