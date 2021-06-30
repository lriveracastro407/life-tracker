const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { validateFields } = require("./validate");

const generateToken = (data) =>
  jwt.sign(data, SECRET_KEY, { expiresIn: "24hr" });

const createUserJwt = (creds) => {
  validateFields({
    required: ["email", "id"],
    obj: creds,
    location: "token generation",
  });

  const payload = {
    email: creds.email,
    isAdmin: creds.isAdmin || false,
    id: creds.id,
  };

  return generateToken(payload);
};

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    return {};
  }
};

module.exports = {
  generateToken,
  validateToken,
  createUserJwt,
};
