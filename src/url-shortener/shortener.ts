export class Shortener {
  private originalToShortUrlMap: Map<string, string>
  private shortToOriginalUrlMap: Map<string, string>

  constructor() {
    this.originalToShortUrlMap = new Map()
    this.shortToOriginalUrlMap = new Map()
  }

  public shortenUrl(url: string) {
    const shortUrl = `${url}/short`
    this.originalToShortUrlMap.set(url, shortUrl)
    this.shortToOriginalUrlMap.set(shortUrl, url)
    return shortUrl
  }

  public getShortUrl(url: string) {
    return this.originalToShortUrlMap.get(url)
  }

  public getOriginalUrl(shortUrl: string) {
    return this.shortToOriginalUrlMap.get(shortUrl)
  }
}