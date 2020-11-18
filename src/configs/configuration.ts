export default {
  jwt_default: process.env.JWT_SECRET || 'secret',
  DB: {
    uri:
      process.env.MONGO_URI ||
      'mongodb://localhost:27017/node-auth-passport-v1',
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
  },
};
