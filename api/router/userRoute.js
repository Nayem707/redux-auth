const express = require('express');
const router = express.Router();
const {
  atuhUser,
  registerUSer,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require('../controller/userController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUSer);
router.post('/auth', atuhUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
