const HTTP_FORBIDDEN = 403;

function ensureAuthorized(req, res, next) {
  const token = req.params['x-access-token'] ||
    req.headers.authorization ||
    req.query['x-access-token'] ||
    req.headers['x-access-token'];

  if (token) {
    // TODO more validations
    req.token = token;
    next();
  } else {
    res.sendStatus(HTTP_FORBIDDEN);
  }
}

module.exports = ensureAuthorized;
