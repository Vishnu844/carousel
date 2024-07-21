import "./App.css";
import Carousel from "./Carousel";

function App() {
  const imgUrls = [
    "https://wallpapers.com/images/featured/anime-dbt18qjb7b1cstr1.jpg",
    "https://wallpaper.dog/large/20512255.jpg",
    "http://m.gettywallpapers.com/wp-content/uploads/2021/01/Cool-Anime-Wallpapers.jpg",
    "http://m.gettywallpapers.com/wp-content/uploads/2020/09/Anime-Wallpaper-1920x1080-1.jpg",
  ];
  return (
    <>
      <Carousel images={imgUrls}/>
    </>
  );
}

export default App;
