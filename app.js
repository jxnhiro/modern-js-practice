import express from "express";
import { openHtml } from "./response-handler.js";

const app = express();

app.get("/", openHtml);

app.listen(3000);
