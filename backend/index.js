const express = require("express");

const app = express();

// PORT
const PORT = 5000;

// server listening
app.listen(PORT, () => {
  console.log(`Blood Bank Server running on port ${PORT}`);
});
