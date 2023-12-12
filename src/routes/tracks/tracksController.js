const connexion = require('../../../db-config');
const db = connexion.promise();

const getOne = async (req, res) => {
  try {
    const [oneTrack] = await db.query('SELECT * FROM track WHERE id = ?', [
      req.params.id,
    ]);

    res.status(200).json(oneTrack[0]);
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

const postTracks = async (req, res) => {
  try {
    const track = req.body;

    const [CreateTrack] = await db.query(
      'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)',
      [track.title, track.youtube_url, track.id_album]
    );

    res.status(201).json({ ...track, id: CreateTrack.insertId });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const updateTracks = (req, res) => {
  res.status(200).send('Update route is OK');
};

const deleteTracks = (req, res) => {
  res.status(200).send('Delete route is OK');
};

module.exports = { getOne, getAll, postTracks, updateTracks, deleteTracks };
