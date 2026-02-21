import type { Notification as NotificationType } from "./types"

export class Notification {
  private notification: NotificationType

  constructor(notification: NotificationType) {
    this.notification = notification
  }

  getNotification() {
    return {
      id: this.notification.id,
      userId: this.notification.userId,
      message: this.notification.message,
      timestamp: this.notification.timestamp
    }
  }
}

