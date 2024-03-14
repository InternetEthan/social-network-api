const { User, Thought } = require('../models');

const thoughtController = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find().sort({ createdAt: -1 }).then((dbThoughtData) => {
            res.json(dbThoughtData);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // get single thought by id
    getThoughtByID(req, res) {
        Thought.findOne({ _id: req.params.id }).then((dbThoughtData) => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    
    },
    // create thought
    createThought(req, res) {
        Thought.create(req.body).then((dbThoughtData) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true }
            );
        }).then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // update thought by id

    // delete thought by id

    // add reaction to thought

    // remove reaction from thought
}

module.exports = thoughtController;