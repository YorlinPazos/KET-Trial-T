const { Router } = require("express");
const { sendMessageHandler, getAllMessagesHandler } = require("../handlers/handlers");

const chatRouter = Router();

chatRouter.post("/send-message", sendMessageHandler);
chatRouter.get("/all-messages", getAllMessagesHandler);

module.exports = chatRouter;
