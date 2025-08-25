import { Router } from "express";
import globalRouter from "./global";
import announcementRouter from "./announcement";

const router = Router();

router.use(globalRouter);

router.use(`/announcement`, announcementRouter);

export default router;
