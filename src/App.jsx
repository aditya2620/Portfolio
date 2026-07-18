import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";
import { BackgroundEffects } from "./components/BackgroundEffects";

import "./App.css";

function App() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
