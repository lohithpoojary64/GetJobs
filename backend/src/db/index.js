import mongoose from 'mongoose';

const ConnectDB = async function () {
  try {
    await mongoose.connect(
      `${process.env.MONGOOSE_URL / process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to the database');
  } catch (error) {
    console.log('Error occured while connecting to the database', error);
  }
};

export { ConnectDB };
