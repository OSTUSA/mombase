var passport = require('passport');

module.exports = {
  initialize: passport.initialize(),
  session: passport.session(),
  checkAuth: function() {
    return function(req, res, next) {
      if (/login/.test(req.url)) return next();
      if (!req.user) return res.status(401).send();
      next();
    };
  }
}
