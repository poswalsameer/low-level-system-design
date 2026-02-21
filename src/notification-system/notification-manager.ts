import { Notification } from "./types"

export class NotificationManager {
  private static instance: NotificationManager
  private allNotifications: Notification[]

  private constructor() {
    this.allNotifications = []
  }

  public static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager()
    }
    return NotificationManager.instance
  }

  public getAllNotifications() {
    return this.allNotifications
  }

  public getNotificationById(id: string) {
    return this.allNotifications.find((notification) => notification.id === id)
  }

  public addNotification(notification: Notification) {
    this.allNotifications.push(notification)
  }

  public deleteNotification(id: string) {
    this.allNotifications = this.allNotifications.filter((notification) => notification.id !== id)
  }
}