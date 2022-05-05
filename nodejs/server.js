const server = require("express")();
server.listen(6000, async () => {});
server.get("/super-app", async (_, response) => {
  response.json({ super: "app" });
});
