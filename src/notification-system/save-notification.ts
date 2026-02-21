// import type { Notification } from "./types"

import type { Notification } from "./types"

export abstract class SaveNotification {
  abstract saveNotification(notification: Notification): void
}

export class SaveNotificationToDatabase extends SaveNotification {
  public saveNotification(notification: Notification): void {
    console.log(`Saving notification to database: ${notification.id}`)
    console.log(`-------------------------`)
  }
}

export class SaveNotificationToMemory extends SaveNotification {
  public saveNotification(notification: Notification): void {
    console.log(`Saving notification to memory: ${notification.id}`)
    console.log(`-------------------------`)
  }
}