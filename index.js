import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (_, res) => {
  res.json({ ok: "ok" });
});

app.listen(port, () => { console.log("app started on port: " + port); });
