const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSeed = [
  {
    username: 'user1',
    email: 'user1@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    thoughts: [],
    friends: [],
  },
  // Add more users as needed
];

User.deleteMany({})
  .then(() => User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.insertedCount + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });