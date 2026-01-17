const ex = require("express");
const app = ex();

const port = 17408;
app.listen(port, () => {
  console.log(`Server started ${port}`);
});
