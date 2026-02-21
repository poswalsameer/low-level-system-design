/**
 * REQUIREMENTS:
 * --------------------------------------
 * Sending notifications to user
 * Notification can be sent via email, sms, and whatsapp
 * Storing all notifications in a memory (in db in real-time)
 * Fetching notifications via id
 */

import { randomUUID } from "node:crypto"
import { Notification } from "./notification"
import { EmailNotification, SmsNotification, WhatsappNotification } from "./send-notification"
import { SaveNotificationToDatabase, SaveNotificationToMemory } from "./save-notification"
import { NotificationManager } from "./notification-manager"


async function main() {

  const notificationToSend = {
    id: randomUUID(),
    userId: randomUUID(),
    message: "Hello, this is a notification",
    timestamp: new Date(),
  }

  // CREATING A NOTIFICATION INSTANCE
  const notificationInstance = new Notification(notificationToSend)
  const notification = notificationInstance.getNotification()

  // SENDING OUT NOTIFICATION
  const sendEmailNotification = new EmailNotification()
  const sendSmsNotification = new SmsNotification()
  const sendWhatsappNotification = new WhatsappNotification()

  sendEmailNotification.sendNotification(notification)
  sendSmsNotification.sendNotification(notification)
  sendWhatsappNotification.sendNotification(notification)

  // SAVING NOTIFICATION TO DATABASE
  const saveNotificationToDatabase = new SaveNotificationToDatabase()
  const saveNotificationToMemory = new SaveNotificationToMemory()

  saveNotificationToDatabase.saveNotification(notification)
  saveNotificationToMemory.saveNotification(notification)

  // ADDING NOTIFICATION INSIDE NOTIFICATION MANAGER
  const notificationManager = NotificationManager.getInstance()
  notificationManager.addNotification(notification)

  console.log(`Getting all saved notifications:`)
  console.log(`---------------------------------------------`)
  console.log(notificationManager.getAllNotifications())
}

main()
