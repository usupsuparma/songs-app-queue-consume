const mapDBToModelPlaylist = ({
  id, name, username,
}) => ({
  id,
  name,
  username,
});

const mapDBToModelSong = ({ id, title, performer }) => ({
  id,
  title,
  performer,
});

module.exports = {
  mapDBToModelPlaylist,
  mapDBToModelSong,
};
