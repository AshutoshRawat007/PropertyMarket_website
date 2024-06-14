const User = require('../models/User');
const Property = require('../models/Property');

exports.getAgents = async (req, res) => {
  try {
    const agents = await User.find();
    res.json(agents);
  } catch (error) {
    console.error('Error fetching agent details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAgentDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const properties = await Property.find({ userId: id });
    res.status(200).json({ user, properties });
  } catch (error) {
    console.error('Error fetching user or properties:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
