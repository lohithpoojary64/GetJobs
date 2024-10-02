import { app } from './src/app';
import { ConnectDB } from './src/db';

//Now connecting to database

ConnectDB()
  .then(console.log('connected to the database'))
  .catch(
    console.log('Error occured while connecting to the database in index page')
  );
