import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MenuProvider } from "./context/MenuContext";
import CompanyAgendaPage from "./pages/CompanyAgendaPage";
//import CompanyDashboardPage from "./pages/CompanyDashboardPage";
//import CompanyProfilePage from "./pages/CompanyProfilePage";

function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        
        <CompanyAgendaPage />
        <Footer />
      </MenuProvider>
    </>
  );
}

export default App;
