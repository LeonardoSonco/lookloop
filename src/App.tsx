import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MenuProvider } from "./context/MenuContext";
//import CompanyAgendaPage from "./pages/CompanyAgendaPage";
//\import CompanyEmployeePage from "./pages/CompanyEmployeePage";
import CompanyProductsPage from "./pages/CompanyProductsPage";
//import CompanyDashboardPage from "./pages/CompanyDashboardPage";
//import CompanyProfilePage from "./pages/CompanyProfilePage";

function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        
        <CompanyProductsPage />
        <Footer />
      </MenuProvider>
    </>
  );
}

export default App;
