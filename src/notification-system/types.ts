export type Notification = {
  id: string
  userId: string
  message: string
  timestamp: Date
}

export type NotificationWithoutTimestamp = Omit<Notification, "timestamp">