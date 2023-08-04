const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user_controller');
router.get('/sign-up', userController.signup);
router.get('/sign-in', userController.signin);
router.post('/create', userController.create);
router.post('/create-session', passport.authenticate('local', {failureRedirect:'/users/sign-in'}), userController.createSession);
router.get('/destroy-session', userController.destroySession);
router.get('/profile/:id',userController.profile);

module.exports = router;