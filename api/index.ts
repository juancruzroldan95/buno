const server = require("./src/server");
const dotenv = require("dotenv")
dotenv.config();
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});