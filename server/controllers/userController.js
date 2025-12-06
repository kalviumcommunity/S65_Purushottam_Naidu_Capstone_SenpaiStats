const User = require("../models/userModel");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/User");
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const existingUser = await User.findOne({
          Email: profile.emails[0].value,
        });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = new User({
          Email: profile.emails[0].value,
          GoogleId: profile.id,
        });

        await newUser.save();
        newUser.isNewUser = true;

        return done(null, newUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

const getUsers = async (req, res) => {
  try {
    const users = await User.findOne();
    if (!users) {
      return res.status(400).json({ message: "No users found!" });
    }
    return res.status(200).json({ userDetails: users });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const addUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();
    return res
      .status(201)
      .json({ message: "User Created Successfully...", userDetails: newUser });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;

    const existingUser = await User.findOne({ _id });

    if (!existingUser) {
      return res.status(400).json({ message: "Not a valid user!" });
    }

    const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).json({
      message: "User Updation Successfull...",
      userDetails: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsers, addUser, updateUser };
