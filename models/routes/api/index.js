const router = require("express").Router();
const userRoutes = require("./courseRoutes");
const thoughtsRoutes = require("./studentRoutes");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;
