const bcrypt = require('bcrypt');
const { User } = require('../database/sequelize');
const { generateToken } = require('../jwt');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    // Use findOne with a query object
    const user = await User.findOne({ name: req.params.name });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
};


// Create a new user
exports.createUser = async (req, res) => {
  const fullname = req.body.fullname
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({fullname, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
};


// Login function
exports.login = async (req, res) => {
  const { fullname, password } = req.body;
  console.log(fullname);
  try {
    const user = await User.findOne({where: { fullname: fullname } });
    console.log(user);
  
    if (!user ) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
console.log(password);
   const passwordMatch=await bcrypt.compare(password, user.password)
   console.log(user.password)
  if (!passwordMatch) {

    return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
