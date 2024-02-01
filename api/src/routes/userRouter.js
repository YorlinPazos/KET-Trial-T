const { Router } = require("express");
const { getAllUsersHandler,
        registerUserHandler,
        loginHandler 
    } = require("../handlers/handlers");

const userRouter = Router();

userRouter.get("/all-users", getAllUsersHandler)
userRouter.post("/register", registerUserHandler);
userRouter.post("/login", loginHandler);

module.exports = userRouter;
