const { Pool } = require('pg');
const { mapDBToModelSong } = require('./utils');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylists(playlistId) {
    console.log(playlistId);
    const query = {
      text: `SELECT playlists.*, songs.* FROM playlists
      LEFT JOIN playlistsongs ON playlistsongs.playlist_id = playlists.id
      LEFT JOIN songs ON songs.id = playlistsongs.song_id
      WHERE playlists.id = $1 
      GROUP BY playlists.id, songs.id`,
      values: [playlistId],
    };

    const result = await this._pool.query(query);
    return result.rows.map(mapDBToModelSong);
  }
}

module.exports = PlaylistsService;
