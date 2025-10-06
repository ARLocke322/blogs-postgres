const jwt = require('jsonwebtoken')
const { User, Session } = require('../models')

// With sessions table:
const userExtractor = async (req, res, next) => {
  const token = req.token;
  
  // Look up session in database
  const session = await Session.findOne({ 
    where: { token },
    include: [User]
  });
  
  if (!session) {
    return res.status(401).json({ error: 'invalid session' });
  }
  
  if (session.user.disabled) {
    return res.status(403).json({ error: 'account disabled' });
  }
  
  req.user = session.user;
  next();
}

module.exports = userExtractor