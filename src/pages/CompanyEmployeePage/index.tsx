import { PlusSquare } from "react-feather";
import CardEmployee from "../../components/CardEmployee";
import { useMenuContext } from "../../context/MenuContext";

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
        <div className="flex gap-2 justify-end cursor-pointer">
          <span className="text-purple text-lg font-semibold ">
            Adicionar Funcionário
          </span>
          <PlusSquare
            color="#ffffff"
            fill="#413B6B"
            size={30}
            strokeWidth={1}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyEmployeePage;
