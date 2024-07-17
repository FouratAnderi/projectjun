const { Track } = require('../database/sequelize');

exports.getAllTracks = async (req, res) => {
  const tracks = await Track.findAll();
  res.json(tracks);
};


exports.getTrackByName = async (req, res) => {
  try {
    const track = await Track.findOne({where:{ trackname : req.params.name }});
    console.log(req.params.name);
    if (!track) {
      return res.status(404).json({ message: "Track not found" });
    }
    res.send(track);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.createTrack = async (req, res) => {
  try{  
    const newTrack = await Track.create(req.body);
    res.status(201).send(newTrack);}

  catch(err){
    res.send(err)
    console.log(err);}
};

exports.updateTrack = async (req, res) => {
  await Track.update(req.body, { where: { idtrack: req.params.id } });
  res.sendStatus(204);
};

exports.deleteTrack = async (req, res) => {
  await Track.destroy({ where: { idtrack: req.params.id } });
  res.sendStatus(204);
};
