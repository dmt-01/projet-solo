import { Router } from "express";
import { AnnouncementController } from "../controller/AnnouncementController";

const announcementRouter = Router();

announcementRouter.get("/", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.browseAnnoucement();
});

announcementRouter.get("/add", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.readAnnoucement();
});

announcementRouter.post("/", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.editAnnoucement();
});

announcementRouter.get("/:id", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.createAnnoucement();
});

announcementRouter.put("/:id", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.addAnnoucement();
});

announcementRouter.delete("/:id", (request, response) => {
  const controller = new AnnouncementController(request, response);
  controller.deleteAnnoucement();
});

export default announcementRouter;
