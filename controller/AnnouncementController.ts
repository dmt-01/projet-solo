import { Controller } from "../libs/Controller";
import data from "../data.json"

export class AnnouncementController extends Controller {
  public browseAnnoucement() {
    this.response.render("pages/announcement", {});
  }

  public readAnnoucement() {
    this.response.render("pages/allAnnouncement", {});
  }

  public editAnnoucement() {
    this.response.render("", {});
  }

  public createAnnoucement() {
    this.response.render("", {});
  }

  public addAnnoucement() {
    this.response.render("", {});
  }

  public deleteAnnoucement() {
    this.response.render("", {});
  }
}
