const express = require('express');
const app = express();
const port = 3000;

// we are just serving static content for now
app.use(express.static('site'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});