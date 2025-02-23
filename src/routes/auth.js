// routes/auth.js
const router = require('express').Router();
const { register, login, getMe } = require('../controllers/auth');
const auth = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, getMe);

module.exports = router;