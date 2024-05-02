const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // Token can be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      // Decoding the JWT
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.person = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  signToken: function ({ email, _id }) {
    const payload = { email, userId: _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },  
};
