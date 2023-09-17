const app = require("./server");

const { PORT = 8000 } = process.env;

module.exports = app.listen(PORT, () => {
  console.info(`Server Running on ${PORT}...`);
});
