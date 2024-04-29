
import CardEmployee from "../../components/CardEmployee";
import { useMenuContext } from "../../context/MenuContext";
import ModalAddEmployee from "../../components/ModalAddEmployee";

const CompanyEmployeePage: React.FC = () => {
  const { isNavOpen } = useMenuContext();
  return (
    <section
      id="companyEmployee"
      className={`flex mt-10 justify-center  ${
        isNavOpen ? "pl-52 ml-1.5" : ""
      }`}
    >
      <div className="flex flex-col gap-6">
        <CardEmployee />
        <CardEmployee />
        <div className="flex gap-2 justify-end">
          <ModalAddEmployee />
        </div>
      </div>
    </section>
  );
};

export default CompanyEmployeePage;
