var playlist = {Prince: 'Purple Rain'}

function updatePlaylist(listname, artist, song){
  listname[artist] = song
  return listname
}
updatePlaylist(playlist, 'Beatles', 'Love Me Do')

function removeFromPlaylist(listname, artist){
  delete listname.artist
  return listname
}
removeFromPlaylist(playlist, 'Beatles')
