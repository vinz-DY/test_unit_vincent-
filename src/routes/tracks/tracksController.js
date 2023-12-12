const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = (req, res) => {
  res.status(200).send('Get One route is OK');
};

const getAll = async (req, res) => {
  try {
    const tracks = await db.query('SELECT * FROM track');
    console.log(tracks);
    res.status(200).json(tracks[0]);
  } catch (error) {
    console.error(error);
    res.SendStatus(500);
  }
};

const postTracks = (req, res) => {
  res.status(200).send('Post route is OK');
};

const updateTracks = (req, res) => {
  res.status(200).send('Update route is OK');
};

const deleteTracks = (req, res) => {
  res.status(200).send('Delete route is OK');
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
