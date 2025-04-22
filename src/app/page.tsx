import { HomeGrid } from "./components/HomeGrid";
import { HomeMainInfo } from "./components/HomeMainInfo";
import HomeAllStories from "./components/HomeAllStories";

export default function Home() {
  return (
    <>
      <HomeMainInfo/>
      <HomeGrid/>
      <HomeAllStories/>
    </>
  );
}
