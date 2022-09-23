import "./App.css";
import { Icon } from "./components/Icon";
import { Home, Footer, Result } from "./views";
import useStore from "./store";

function App() {
  const { count, height } = useStore();

  return (
    <div className="flex ml-52 w-fit mt-10">
      <div className="w-3/5 grow gap-x-16">
        <Home />
        {height && count ? <Result /> : <Footer />}
      </div>
      <Icon.logo className="w-2/5 flex-auto right-0 " />
    </div>
  );
}

export default App;
