/**
 * FUNCTIONAL REQUIREMENTS:
 * -------------------------------------------------
 * User can play/pause to a song
 * User can create a playlist
 * User can delete a playlist
 * User can add a song to a playlist
 * User can remove a song from a playlist
 * User can like or dislike a song 
 */

import { Playlist } from "./playlist"
import { Song } from "./song"
import { User } from "./user"

async function main() {
  console.log(`\n------ CREATING A USER --------\n`)
  const userInstance = new User({ username: 'poswalsameer' })
  const currentUser = userInstance.getCurrentUser()
  console.log(`Current User: ${currentUser.username}`)

  console.log(`\n------ CREATING A SONG --------\n`)
  const firstSongInstance = new Song({
    title: "first song",
    artist: "first song artist"
  })

  console.log(`${firstSongInstance.getCurrentSong().title} created: ${firstSongInstance.getCurrentSong().songId}`)

  const secondSongInstance = new Song({
    title: "second song",
    artist: "second song artist"
  })

  console.log(`${secondSongInstance.getCurrentSong().title} created: ${secondSongInstance.getCurrentSong().songId}`)

  console.log(`\n------ PLAYING A SONG --------\n`)
  userInstance.playSong(firstSongInstance)
  userInstance.playSong(secondSongInstance)

  userInstance.pauseSong()

  console.log(`\n------ CREATING A PLAYLIST --------\n`)
  const firstPlaylistInstance = new Playlist({
    playlistName: "first playlist",
    playlistOwner: currentUser.userId,
    songs: [firstSongInstance.getCurrentSong().songId]
  })

  console.log(`${firstPlaylistInstance.getCurrentPlaylist().playlistName} created: ${firstPlaylistInstance.getCurrentPlaylist().playlistId}`)

  const secondPlaylistInstance = new Playlist({
    playlistName: "second playlist",
    playlistOwner: currentUser.userId,
    songs: [secondSongInstance.getCurrentSong().songId]
  })

  console.log(`${secondPlaylistInstance.getCurrentPlaylist().playlistName} created: ${secondPlaylistInstance.getCurrentPlaylist().playlistId}`)

  console.log(`\n------ ADDING A SONG TO A PLAYLIST --------\n`)
  firstPlaylistInstance.addSong(secondSongInstance.getCurrentSong().songId)
  console.log(firstPlaylistInstance.getCurrentPlaylist())

  console.log(`\n------ REMOVING A SONG FROM A PLAYLIST --------\n`)
  firstPlaylistInstance.removeSong("20376b3a-d9af-43f0-828d-75a3f0578800")
  console.log(firstPlaylistInstance.getCurrentPlaylist())

  console.log(`\n------ DELETING A PLAYLIST --------\n`)
  firstPlaylistInstance.deletePlaylist()
  console.log(firstPlaylistInstance.getCurrentPlaylist())

  console.log(`\n------ LIKING A SONG --------\n`)
  userInstance.likeSong(firstSongInstance)
  console.log(firstSongInstance.getCurrentSong())

  console.log(`\n------ DISLIKING A SONG --------\n`)
  userInstance.dislikeSong(firstSongInstance)
  console.log(firstSongInstance.getCurrentSong())
}

main()
