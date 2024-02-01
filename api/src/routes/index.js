const { Router } = require("express");
const chatRouter = require("./chatRouter");
const userRouter = require("./userRouter");

const router = Router();

router.use('/user', userRouter);
router.use('/chat', chatRouter);

module.exports = router;
