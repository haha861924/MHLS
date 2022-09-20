import "./App.css";
import Home from "./views/Home";
import { Icon } from "./components/icon";
import Footer from "./views/Footer";
import useStore from "./store";
import Result from "./views/Result";
import { useEffect } from "react";
import { BodyInfo } from "./models";

function App() {
  const { count, height } = useStore();

  return (
    <div className="flex ml-52 w-fit mt-10">
      <div className="w-3/5 grow gap-x-16">
        <Home />
        {height && count ? <Result /> : <Footer />}
      </div>
      <Icon.logo className="w-2/5 flex-auto right-0" />
    </div>
  );
}

export default App;
