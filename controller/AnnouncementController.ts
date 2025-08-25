import { Controller } from "../libs/Controller";

export class AnnouncementController extends Controller {
  public annoucement() {
    this.response.render("pages/announcement", {});
  }
}
