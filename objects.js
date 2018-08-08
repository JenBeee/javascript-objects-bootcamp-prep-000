var playlist = {Prince: 'Purple Rain'}

function updatePlaylist(listname, artist, song){
  listname[artist] = song
  console.log(listname)
}
updatePlaylist(playlist, 'Beatles', 'Love Me Do')

function removeFromPlaylist(listname, artist){
  delete listname.artist
  console.log(listname)
}
removeFromPlaylist(playlist, 'Beatles')
