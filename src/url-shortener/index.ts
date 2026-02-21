/**
 * User can add a url that needs to be shortened
 * A mapping of every url to it's shortened url
 * When a user visits a shortened url, they are redirected to the original url
 */

import { Shortener } from "./shortener"

async function main() {

  const url: string = "https://sameerposwal.xyz"

  const shortener = new Shortener()

  shortener.shortenUrl(url)

  const shortenUrl = shortener.getShortUrl(url)

  console.log(`Fetching the shortened url: ${shortenUrl}`)
  console.log(`------------------------------------------------`)

  console.log(`Fetching the original url: ${shortener.getOriginalUrl(shortenUrl as string)}`)
  console.log(`------------------------------------------------`)
}

main()
