export default (req, res) => {
  res.json({ user: req.query.user });
};
