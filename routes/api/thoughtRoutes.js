const router = require('express').Router();


const {
    getThoughts,
    getThoughtByID,
    createThought,

} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtByID);

module.exports = router;