import { Aperture, Facebook, Instagram, Twitter } from "react-feather";
import { useMenuContext } from "../../context/MenuContext";

import companyProfileImg1 from "../../assets/CompanyProfileImg1.png";
import companyProfileImg2 from "../../assets/CompanyProfileImg2.png";
import companyProfileImg3 from "../../assets/CompanyProfileImg3.png";
import ChangeButton from "../../components/ChangeButton";

const companyProfileImages = [
  companyProfileImg1,
  companyProfileImg2,
  companyProfileImg3,
];

const CompanyProfilePage: React.FC = () => {
  const { isNavOpen } = useMenuContext();
  return (
    <section
      className={`flex flex-col justify-center items-center  ${
        isNavOpen ? "pl-52 ml-1.5" : ""
      }`}
    >
      <div className="max-w-5xl my-10 mx-5 shadow-shadowBox rounded-3xl p-8">
        <ul className="flex flex-wrap gap-5 align-middle">
          <li className="pr-5">
            <span className="font-bold">Nome da Empresa:</span> Bosky Barbearia
          </li>
          <li className="pr-5">
            <span className="font-bold">Celular:</span> (68) 99953-9519
          </li>
          <li className="pr-5">
            <span className="font-bold">Telefone: </span>(68) 3567-1295
          </li>
          <li className="pr-5">
            <span className="font-bold">E-mail:</span> boskybarbearia@gmail.com
          </li>
          <li className="pr-5">
            <span className="font-bold">CNPJ:</span> 91.979.225/0001-97{" "}
          </li>
        </ul>

        <ul
          className={` grid grid-cols-2 gap-4	my-5 ${
            isNavOpen ? "max-md+:grid-cols-1" : " max-md:grid-cols-1"
          }`}
        >
          <li className="flex gap-2">
            <Facebook />
            boskybarbearia
          </li>
          <li className="flex gap-2">
            <Instagram />
            boskybarbearia{" "}
          </li>
          <li className="flex gap-2">
            <Twitter />
            boskybarbearia
          </li>
          <li className="flex gap-2">
            <Aperture />
            @boskybarberia
          </li>
        </ul>

        <p>
          <span className="font-bold">Sobre:</span> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </p>
      </div>

      <div className="flex flex-wrap">
        <div className="shadow-shadowBox rounded-3xl p-8 w-fit mx-5">
          
          <ul className="flex flex-col gap-2">
            <li>
              <span className="font-bold ">Cep:</span> 97547-100
            </li>
            <li>
              <span className="font-bold">Rua:</span> Praça Bartolomeu de Gusmão
            </li>
            <li>
              <span className="font-bold">Bairro:</span> Capão do Angico
            </li>
            <li>
              <span className="font-bold">Número:</span> 66
            </li>
            <li>
              <span className="font-bold">Cidade:</span> Alegrete
            </li>
            <li>
              <span className="font-bold">Estado:</span> Rio Grande do Sul
            </li>
          </ul>
          <ChangeButton />
        </div>

        <div className="shadow-shadowBox rounded-3xl p-8 w-fit mx-5 min-h-72">

          

          <ul className="flex flex-wrap gap-8 min-h-48">
            {companyProfileImages &&
              companyProfileImages.map((image) => (
                <li>
                  <img src={image} className="rounded-md" alt="Imagens para demonstrar sua empresa." />
                </li>
              ))}
          </ul>
          <ChangeButton />
        </div>
      </div>
    </section>
  );
};

export default CompanyProfilePage;
