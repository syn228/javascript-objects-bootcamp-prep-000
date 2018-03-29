<<<<<<< HEAD
var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
=======
var playlist = {artistName: 'song'};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({playlist}, {artistName: songTitle})
  
>>>>>>> 6810113bab033b58cd02fe047e718174ecfaa801
}