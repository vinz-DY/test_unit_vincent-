const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM track WHERE id = ?', [
      req.params.id,
    ]);

    if (result[0].length === 0) {
      res.status(404).json({ error: 'Record not found' });
    } else {
      res.status(200).json(result[0][0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
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
