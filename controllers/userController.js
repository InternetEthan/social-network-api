const { objectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find({})
                .populate({
                    path: 'thoughts',
                    select: '-__v'
                })
                .select('-__v')
                .sort({ _id: -1 });
            res.json(users);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    async getUserById({ params }, res) {
        try {
            const user = await User.findOne({ _id: params.id })
                .populate({
                    path: 'thoughts',
                    select: '-__v'
                })
                .select('-__v');
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    async createUser({ body }, res) {
        try {
            const user = await User.create(body);
            res.json(user);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    async updateUser({ params, body }, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: params.id },
                body,
                { new: true, runValidators: true });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            } res.json(user);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    async deleteUser({ params }, res) {
        try {
            const user = await User.findOneAndRemove({ _id: params.id });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            } res.json({ message: 'User deleted!' });
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    async addFriend({ params }, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { friends: params.friendId } },
                { new: true, runValidators: true });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            } res.json(user);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    async removeFriend({ params }, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { friends: params.friendId } },
                { new: true, runValidators: true });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            } res.json(user);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    }
};