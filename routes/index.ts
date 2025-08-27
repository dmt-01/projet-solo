import { Router } from "express";
import globalRouter from "./global";
import announcementRouter from "./announcements";

const router = Router();

router.use(globalRouter);

router.use(`/announcements`, announcementRouter);

export default router;
