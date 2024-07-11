const jobsRouter = require("./jobs.router");
const userRouter = require("./user.router");

module.exports = (app) => {
  const version = "/api/v1";
  app.use(version + "/jobs", jobsRouter);
  app.use(version + "/users", userRouter);
};
