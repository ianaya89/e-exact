const validateUser = function(req, res, next) { 
  let errors = [];

  if (!req.body.username) {
    errors.push('Missing username parameter.')
  }

  if (!req.body.password) {
    errors.push('Missing password parameter.')
  }

  if (errors.length > 0) {
    return res
      .status(422)
      .json({ message: errors });
  }

  return next();
}

export { validateUser };