const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { date } = require("./date");

mongoose.connect("mongodb://localhost:27017/todolistDB", {
	useNewUrlParser: true,
});

const itemsSchema = {
	name: String,
};

const Item = mongoose.model("Item", itemsSchema);
const list = ["Buy Food ", "Cook Food", "Eat Food"];
const workList = [];

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("list", { listTitle: date(), list, path: "/" });
});

app.post("/", (req, res) => {
	const item = req.body.newItem;
	const ind = item.trim().length;
	if (req.body.button === "work") {
		ind && workList.push(item);
		res.redirect("/work");
	} else {
		ind && list.push(item);
		res.redirect("/");
	}
});

app.get("/work", (req, res) => {
	res.render("list", { listTitle: "work", list: workList, path: "/work" });
});

app.listen(PORT, () => {
	console.log("app starting on port 5000");
});
