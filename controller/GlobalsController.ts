import { Controller } from "../libs/Controller";
import data from "../data.json";

export class GlobalController extends Controller {
  public homepage() {
    this.response.render("pages/home", { announcements: data });
  }
}
