module.exports = (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect("/");
  }
  
  req.session.isLoggedIn = false;
  next();
};
