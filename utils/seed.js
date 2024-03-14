const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

mongoose.connect('mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSeed = [
  {
    username: 'user1',
    email: 'user1@example.com',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
  },
  // Add more users as needed
];

const thoughtSeed = [
  {
    thoughtText: 'This is a thought from user1',
    username: 'user1',
    reactions: [
      {
        reactionBody: 'This is a reaction to user1 thought',
        username: 'user2',
      },
    ],
  },
  // Add more thoughts as needed
];

User.deleteMany({})
  .then(() => User.insertMany(userSeed))
  .then((data) => {
    console.log(data.length + ' user records inserted!');
    return Thought.deleteMany({});
  })
  .then(() => Thought.insertMany(thoughtSeed))
  .then((data) => {
    console.log(data.length + ' thought records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });