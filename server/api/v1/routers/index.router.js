const jobsRouter = require("./jobs.router");

module.exports = (app) => {
  const version = "/api/v1";
  app.use(version + "/jobs", jobsRouter);
};
