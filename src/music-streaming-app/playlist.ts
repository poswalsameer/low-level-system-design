import { randomUUID } from "node:crypto"

export class Playlist {
  private playlistId: string
  private playlistName: string
  private playlistOwner: string
  private songs: string[]

  constructor({ playlistName, playlistOwner, songs }: { playlistName: string, playlistOwner: string, songs: string[] }) {
    this.playlistId = randomUUID()
    this.playlistName = playlistName
    this.playlistOwner = playlistOwner
    this.songs = songs
  }

  public getCurrentPlaylist() {
    return {
      playlistId: this.playlistId,
      playlistName: this.playlistName,
      playlistOwner: this.playlistOwner,
      songs: this.songs
    }
  }

  public addSong(songId: string) {
    this.songs.push(songId)
  }

  public removeSong(songId: string) {
    this.songs = this.songs.filter((song) => song !== songId)
  }

  public deletePlaylist() {
    this.songs = []
  }
}