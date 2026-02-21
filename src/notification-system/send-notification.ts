import type { Notification } from "./types"

export abstract class SendNotification {
  abstract sendNotification(notification: Notification): void
}

export class EmailNotification extends SendNotification {
  sendNotification(notification: Notification) {
    console.log(`Sending email message to user`)
    console.log(`-------------------------`)
    console.log(notification)
    console.log(`-------------------------`)
  }
}

export class SmsNotification extends SendNotification {
  sendNotification(notification: Notification) {
    console.log(`Sending sms message to user`)
    console.log(`-------------------------`)
    console.log(notification)
    console.log(`-------------------------`)
  }
}

export class WhatsappNotification extends SendNotification {
  sendNotification(notification: Notification) {
    console.log(`Sending whatsapp message to user`)
    console.log(`-------------------------`)
    console.log(notification)
    console.log(`-------------------------`)
  }
}