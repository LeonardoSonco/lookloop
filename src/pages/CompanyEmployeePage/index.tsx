import CardEmployee from "../../components/CardEmployee";
import { useMenuContext } from "../../context/MenuContext";

const CompanyEmployeePage : React.FC = () => {
    const { isNavOpen } = useMenuContext();
    return <section id="companyEmployee" className={`flex flex-col justify-center items-center  ${
        isNavOpen ? "pl-52 ml-1.5" : ""
      }`}>
        <CardEmployee />
        
    </section>
}

export default CompanyEmployeePage;