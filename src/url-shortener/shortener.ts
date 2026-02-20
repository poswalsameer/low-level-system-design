export class Shortener {
  private url: string
  private urlMap: Map<string, string>

  constructor(url: string) {
    this.url = url
    this.urlMap = new Map()
  }

  public getUrl() {
    return this.url
  }

  public shortenUrl(url: string) {
    console.log(`url is shortened...`)
    const shortUrl = `${url}/short`
    this.urlMap.set(url, shortUrl)
    return shortUrl
  }

  public getShortUrl(url: string) {
    return this.urlMap.get(url)
  }
}