import { useEffect, useContext } from "react";
import { NotificationContext } from "@/state/notificationContext";

export type Message = {
  message: string;
  status: string;
} | null;

export default function useNotification(message: Message) {
  const [, createNotification] = useContext(NotificationContext);

  useEffect(() => {
    createNotification(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
}
