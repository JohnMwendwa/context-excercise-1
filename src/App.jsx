import { CartContextProvider } from "./contexts/cart-context";
import Events from "./components/Events/Events";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  return (
    <CartContextProvider>
      <MainHeader />
      <main>
        <Events />
      </main>
    </CartContextProvider>
  );
}

export default App;
