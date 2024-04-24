import ProgressBar from "../../components/ProgressBar";
import { useMenuContext } from "../../context/MenuContext";

const CompanyDashboardPage: React.FC = () => {
  const { isNavOpen } = useMenuContext();
  return (
    <section
      className={`flex flex-col justify-center items-center  ${
        isNavOpen ? "pl-52 ml-1.5" : ""
      }`}
    >
      <h3>Faturamentos</h3>
      <div className="max-w-5xl my-10 mx-5 shadow-shadowBox rounded-3xl p-8">
        <h4>Faturamento Anual</h4>
      </div>
      <div className="max-w-5xl my-10 mx-5 shadow-shadowBox rounded-3xl p-8">

        <h4>Faturamento Semanal</h4>
        <ProgressBar />
      </div>
     
    </section>
  );
};

export default CompanyDashboardPage;
