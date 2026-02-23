import { randomUUID } from "node:crypto"
import { Song } from "./song"

export class User {
  private userId: string
  private username: string
  private likedSongs: string[]
  private dislikedSongs: string[]
  private playlists: string[]
  private currentPlayingSong: string | null

  constructor({ username }: { username: string }) {
    this.userId = randomUUID()
    this.username = username
    this.likedSongs = []
    this.dislikedSongs = []
    this.playlists = []
    this.currentPlayingSong = null
  }

  public getCurrentUser() {
    return {
      userId: this.userId,
      username: this.username,
      likedSongs: this.likedSongs,
      dislikedSongs: this.dislikedSongs,
      playlists: this.playlists,
      currentPlayingSong: this.currentPlayingSong
    }
  }

  public playSong(songInstance: Song) {
    const song = songInstance.getCurrentSong()
    console.log(`user is playing ${song.title}....`)
    this.currentPlayingSong = song.songId
  }

  public pauseSong() {
    console.log(`user paused ${this.currentPlayingSong}....`)
    this.currentPlayingSong = null
  }

  public likeSong(song: Song) {
    this.likedSongs.push(song.getCurrentSong().songId)
    song.likeSong()
  }

  public dislikeSong(song: Song) {
    this.dislikedSongs.push(song.getCurrentSong().songId)
    song.dislikeSong()
  }
}