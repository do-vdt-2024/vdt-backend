var routers = require("express").Router();
const userRouters = require("./user.route");

const authController = require("../controllers/auth.controller");
const heatlthCheckRouters = require("./healthCheck.route");
/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// console.log("in routes")
//
routers.post("/login", authController.authLogin);
routers.use("/users", userRouters);
// routers.use('/healthz',heatlthCheckRouters)
module.exports = routers;
