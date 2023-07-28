const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const generetToken = require('../utils/generateToken');

// USER_AUTH; METHOD:-> POST:: "api/users/auth"
const atuhUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generetToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error(' Invalid User!');
  }
});

// REGISTER_USER; METHOD:-> POST:: "api/users"
const registerUSer = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //step-1 : when user EMAIL exist!
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User alerday exist!');
  }

  //step-2 : when user CREATED!
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generetToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error(' Invalid User!');
  }
});

// LOGOUT_USER; METHOD:-> POST:: "api/users/logout"
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ msg: 'User Logged OUT!' });
});

// USER_PROFILE; METHOD:-> GET:: "api/users/profile"
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
});

// USER_UPDATE_PROFILE; METHOD:-> PUT:: "api/users/profile"
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.name;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found!');
  }
});

module.exports = {
  atuhUser,
  registerUSer,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
