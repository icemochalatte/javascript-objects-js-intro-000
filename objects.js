var playlist = { eminem: "balls" };

function updatePlaylist (playlist, artist, title) {
  return Object.assign({}, playlist, { [artist]: title });

}
