import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Menu } from "./components/Menu";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <Menu />
      <Main />
      <Footer />
    </div>
  );
};
