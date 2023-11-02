import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("index", { title: "Express" });
});
router.post("/upload", (req: Request, res: Response) => {
  res.json({ message: "This is a post req." });
});
export default router;
