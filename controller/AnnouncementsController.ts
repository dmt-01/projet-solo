import { Controller } from "../libs/Controller";
import data from "../data.json";

export class AnnouncementController extends Controller {
  public browseAnnouncements() {
    this.response.render("pages/announcements", { announcements: data });
  }

  public createAnnouncements() {
    this.response.render("pages/addAnnouncement", { announcements: data });
  }

  public addAnnouncements() {
    const {
      title,
      description,
      skills,
      mission_type,
      start_date,
      salary,
      salary_unit,
      password,
    } = this.request.body;
    const newAnnoncement = {
      id: Date.now(),
      title,
      description,
      skills: skills.split(","),
      mission_type,
      start_date,
      salary,
      salary_unit,
      password,
    };

    data.push(newAnnoncement);

    this.response.redirect("/announcements");
  }

  public readAnnouncement() {
    const id = Number(this.request.params.id);
    const announcement = data.find((a) => a.id === id);

    if (!announcement) {
      return this.response.status(404).send("Annonce Introuvable");
    }

    this.response.render("pages/announcement", { announcement });
  }

  public editAnnouncement() {
    this.response.render("pages/editAnnouncement", { announcement: data });
  }

  public deleteAnnouncement() {
    this.response.render("", {});
  }
}
