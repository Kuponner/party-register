import { conn } from '../models/dbConnection.js';
import app from '../app.js';

// Listening server

const main = () => {

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(505);
    res.send('505 - Server error');
  });

  app.use(function (req, res) {
    res.status(404);
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
  });

  app.listen(app.get('port'));
  console.log(`App listening on port ${app.get('port')}`);
};

main();