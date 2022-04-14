const Koa = require("koa");
const userRouter = require("./app/api/user");
const bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(bodyParser());
app.use(userRouter.routes());

app.listen(8080);
