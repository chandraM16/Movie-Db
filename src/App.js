import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Body } from "./Component/Main Body/Body";
import Footer from "./Component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Movies } from "./Component/Movies/Movies";
import { Content } from "./Component/Content Showcase/Content";
import { MyStuff } from "./Component/My Stuff/MyStuff";
import { useSelector } from "react-redux";

function App() {
  const { currPage, pages } = useSelector((data) => data.movieData);
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route
            path={`/:category/:sub_category/:${currPage}`}
            element={<Movies />}
          />
          <Route
            path={`/:category/:sub_category/:${currPage}/:movieId`}
            element={<Content />}
          />
          <Route path={`/myStuff/:stuff_category`} element={<MyStuff />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
