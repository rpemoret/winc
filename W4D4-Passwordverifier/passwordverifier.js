const checkpassword = function(checkpassword) {
  // check password requirements
  return checkpassword.map(password => password.length);
};

module.exports = checkpassword;
