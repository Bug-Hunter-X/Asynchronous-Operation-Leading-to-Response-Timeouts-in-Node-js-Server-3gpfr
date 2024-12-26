const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  const timeoutId = setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay

  // Set a timeout for the response
  res.setTimeout(10000, () => {
    clearTimeout(timeoutId); // Clean up the previous timeout
    res.status(504).send('Request timed out');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});