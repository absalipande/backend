import User from '../models/User.js';

// GET all /users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET individual /users/:id
export const getUserById = async (req, res) => {
  try {
    const userId = await User.findById(req.params.id);
    res.status(200).json(userId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// POST /users/
export const postUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    gender: req.body.gender,
  });
  try {
    const listedUser = await user.save();
    res.status(201).json(listedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PATCH /users/:id
export const updateUser = async (req, res) => {
  const userId = req.header('X-USER-ID');
  const { content } = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, { $set: content });
    res.status(200).json({ message: 'Updated Post' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /users/:id
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
