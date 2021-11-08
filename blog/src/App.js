import { Routes, Route } from "react-router-dom";
import { Menu } from "./Menu";
import { Blog } from "./Blog";
import { AddPost } from "./AddPost";
import { FatherComponent } from "./FatherComponent";

function App() {
  return (
    <div className="App">
      <FatherComponent />
      <Menu />
      <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
        <Route path="/about" element={<h1>Страница О НАС</h1>} />
        <Route path="/contacts" element={<h1>Страница КОНТАКТЫ</h1>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
