import Timeline from "components/Timeline";
import { useContext, useEffect } from "react";
import { AppbarContext } from "../components/ViewportProvider";

export default function Home() {
  const { setAppbarContents, setVisible } = useContext(AppbarContext);
  useEffect(() => {
    setAppbarContents(null);
    setVisible(true);
  }, [setAppbarContents, setVisible]);
  return <Timeline />;
}
