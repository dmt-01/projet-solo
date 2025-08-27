import { Router } from "express";
import { AnnouncementController } from "../controller/AnnouncementsController";

const announcementRouter = Router();

announcementRouter.get("/", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.browseAnnouncements();
});

announcementRouter.get("/add", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.createAnnouncements();
});

announcementRouter.post("/", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.addAnnouncements();
});

announcementRouter.get("/:id", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.readAnnouncement();
});

announcementRouter.put("/:id", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.editAnnouncement();
});

announcementRouter.delete("/:id", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.deleteAnnouncement();
});

export default announcementRouter;
