import "./App.css";
import Home from "./views/Home";
import { Icon } from "./components/icon";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="flex ml-52 w-fit mt-10">
      <div className="w-3/5 grow gap-x-16">
        <Home />
        <Footer />
      </div>
      <Icon.logo className="w-2/5 flex-none" />
    </div>
  );
}

export default App;
