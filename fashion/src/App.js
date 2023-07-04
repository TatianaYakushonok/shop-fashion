
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Salenow from "./components/salenow/Salenow";
import Favourite from "./components/favourite/Favourite";
import Download from "./components/download/Download";

function App() {

  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Salenow />
      <Favourite />
      <Download />
    </div>
  );
}

export default App;
