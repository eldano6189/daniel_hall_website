import { AboutMe } from "../../data/AboutMe";

const test = JSON.stringify(AboutMe);

export default function handler(req, res) {
  res.status(200).json({ test });
}
