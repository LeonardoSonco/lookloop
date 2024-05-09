import BoxShadow from "../../components/BoxShadow";
import CardProduct from "../../components/Cards/CardProduct";
import { useMenuContext } from "../../context/MenuContext";

const CompanyProductsPage: React.FC = () => {
  const { isNavOpen } = useMenuContext();
  return (
    <section
      id="companyProducts"
      className={`flex mt-10 justify-center  ${
        isNavOpen ? "pl-52 ml-1.5" : ""
      }`}
    >
      <BoxShadow>
        <div className=" flex flex-wrap max-w-4xl justify-center">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          
        </div>
      </BoxShadow>
    </section>
  );
};

export default CompanyProductsPage;
