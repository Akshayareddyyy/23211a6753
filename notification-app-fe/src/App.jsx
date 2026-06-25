import { NotificationsPage } from "./pages/NotificationsPage";
import { useEffect } from "react";
import { Log } from "../../logging-middleware/logger";

export default function App() {

  useEffect(() => {

    Log(
      "info",
      "component",
      "App mounted successfully"
    );

  }, []);

  return (
    <NotificationsPage />
  );

}