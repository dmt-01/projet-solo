import { Router } from "express";
import globalRouter from "./global";
import announcementRouter from "./announcement";

const router = Router();

router.use(globalRouter);

router.use(`/Announcement`, announcementRouter);

export default router;
