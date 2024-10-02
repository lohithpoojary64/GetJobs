import { app } from './app.js';
import { ConnectDB } from './db/index.js';

ConnectDB()
  .then(
    app.listen(process.env.PORT || 5000, (req, res) => {
      console.log('Server is listening on the port ', process.env.PORT || 5000);
    })
  )
  .catch(err =>
    console.log(
      'Error occured while connecting to the database and the error is',
      err
    )
  );
