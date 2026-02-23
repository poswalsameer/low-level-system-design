import { randomUUID } from "node:crypto"

export class Song {
  private songId: string
  private title: string
  private artist: string
  private likes: number
  private dislikes: number

  constructor({ title, artist }: { title: string, artist: string }) {
    this.songId = randomUUID()
    this.title = title
    this.artist = artist
    this.likes = 0
    this.dislikes = 0
  }

  public getCurrentSong() {
    return {
      songId: this.songId,
      title: this.title,
      artist: this.artist,
      likes: this.likes,
      dislikes: this.dislikes,
    }
  }

  public likeSong() {
    this.likes++
  }

  public dislikeSong() {
    this.dislikes++
  }
}