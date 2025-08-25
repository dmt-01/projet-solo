import { Router } from "express";
import { AnnouncementController } from "../controller/AnnouncementController";

const announcementRouter = Router();

announcementRouter.get("/", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.annoucement();
});

export default announcementRouter;
