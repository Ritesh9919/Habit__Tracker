const express = require('express');
const router = express.Router();
const passport = require('passport');

const habitController = require('../controllers/habit_controller');
router.post('/create', passport.checkAuthentication,habitController.create);
router.get('/weekly', habitController.weekly);
router.get('/destroy/:id', passport.checkAuthentication, habitController.destroy);
router.get('/edit', passport.checkAuthentication, habitController.edits);
router.post('/edit/:id' ,passport.checkAuthentication, habitController.edit);
router.post('/:id/toggle', habitController.toggle);

module.exports = router;