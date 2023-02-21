const jsonServer = require("json-server"); // importing json-server library
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // you can use any port number here; i chose to use 3001

app.use(middlewares);
app.use(router);

app.listen(port, () => (
    console.log("Live on http://localhost:3000/")
));