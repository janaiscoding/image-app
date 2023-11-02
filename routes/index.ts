import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
import upload from "../middleware/multerConfig";
import User from "../models/user";

/* GET home page. */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const users = await User.find({});
  if (users) {
    res.status(200).json({ users });
  } else {
    res.status(404).json({ message: "No users yet." });
  }
});

router.post(
  "/",
  upload.single("image"),
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
      avatarURL: req.file && req.file.path,
    });
    await newUser.save();
    res.status(200).json({ message: "Success", newUser });
  }
);
export default router;
