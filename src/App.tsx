import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MenuProvider } from "./context/MenuContext";
import CompanyProfilePage from "./pages/CompanyProfilePage";

function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        <CompanyProfilePage />
        <Footer />
      </MenuProvider>
    </>
  );
}

export default App;
