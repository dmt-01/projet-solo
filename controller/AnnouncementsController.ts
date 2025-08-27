import { Controller } from "../libs/Controller";
import data from "../data.json";

export class AnnouncementController extends Controller {
  public browseAnnouncements() {
    this.response.render("pages/allAnnouncement", {});
  }

  public createAnnouncements() {
    this.response.render("pages/createAnnouncement", {});
  }

  public addAnnouncements() {
    const { titre, description, competences, type_mission, salaire } =
      this.request.body;
    const newAnnoncement = {
      id: Date.now(),
      titre,
      description,
      competences: competences.split(","),
      type_mission,
      salaire,
    };

    data.push(newAnnoncement)

    this.response.redirect("/announcement");
  }

  public readAnnouncement() {
    const id = Number(this.request.params.id);
    const announcement = data.find((a) => a.id === id);

    if (!announcement) {
      return this.response.status(404).send("Annonce Introuvable")
    }

    this.response.render("pages/announcement", { announcement });
  }

  public editAnnouncement() {
    const id = Number(this.request.params.id);
    const announcement = data.find((a) => a.id === id);

    if (!announcement) {
      return this.response.status(404).send("Annonce Introuvable")
    }

    this.response.render("pages/createAnnouncement", { announcement });
  }

  public deleteAnnouncement() {
    this.response.render("", {});
  }
}
