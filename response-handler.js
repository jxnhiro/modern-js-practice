import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const openHtml = (req, res, next) => {
  //  fs.readFile("my-page.html", "utf8", (err, data) => {
  //    res.send(data);
  //  });
  res.sendFile(join(__dirname, "my-page.html"));
};
