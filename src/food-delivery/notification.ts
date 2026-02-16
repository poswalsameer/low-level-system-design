export abstract class Notification {
  abstract sendNotification(): void
}

export class EmailNotification extends Notification {
  sendNotification() {
    console.log("Email notification sent")
  }
}

export class SMSNotification extends Notification {
  sendNotification() {
    console.log("SMS notification sent")
  }
}

export class WhatsappNotification extends Notification {
  sendNotification() {
    console.log("Whatsapp notification sent")
  }
}