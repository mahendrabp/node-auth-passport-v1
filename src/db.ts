import config from './configs/configuration';
import mongoose, { ConnectionOptions } from 'mongoose';

const connectionOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
  poolSize: 10, // Maintain up to 10 socket connections

  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

mongoose.connect(config.DB.uri, connectionOptions);

const connection = mongoose.connection;

connection.on('open', () => {
  console.log('DB connected!!!');
});

connection.on('error', (err) => {
  console.log(err);
  process.exit(0);
});
