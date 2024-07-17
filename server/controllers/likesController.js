const { LikeTable } = require('../database/sequelize');

exports.getAllLikes = async (req, res) => {
  const likes = await LikeTable.findAll();
  res.json(likes);
};

exports.getLikeById = async (req, res) => {
  const like = await LikeTable.findByPk(req.params.id);
  res.json(like);
};

exports.createLike = async (req, res) => {
  const newLike = await LikeTable.create(req.body);
  res.status(201).json(newLike);
};

exports.deleteLike = async (req, res) => {
  await LikeTable.destroy({ where: { idlikestable: req.params.id } });
  res.sendStatus(204);
};
