import express from "express";
import { json, urlencoded } from "body-parser";
import { homepageController } from "./Controllers/HomepageController";
import path from "path";
import { ApiParse } from "./Controllers/Api/Parse";
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(json()); // for parsing application/json
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", homepageController);
app.post("/api/v1/parse", ApiParse);

app.listen(3221, () => {
    console.log(`Listening on port 3221: http://localhost:3221`);
});
