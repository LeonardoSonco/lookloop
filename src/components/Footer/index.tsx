import { Facebook, Instagram, Twitter } from "react-feather";
import { useMenuContext } from "../../context/MenuContext";


const Footer: React.FC = () => {
  const  {windowSize,isNavOpen} = useMenuContext();
  console.log("WIndows SIze", windowSize)


  return (
    <footer
      className={`w-full bg-purple mt-48 pt-10 pr-5 rounded-t-large ${isNavOpen ? " pl-56" : ""}`}
      
    >
      <div className=" flex justify-between mx-8">
        <span></span>
        <h2 className="text-white text-2xl ml-14 font-bold">LookLoop</h2>
        <div className="flex gap-4">
          <Instagram fill="white" color="#413B6B" />
          <Facebook fill="white" color="#413B6B" strokeWidth={0} />
          <Twitter fill="white" color="#413B6B" />
        </div>
      </div>

      <ul className="flex gap-14 flex-wrap justify-center text-white py-5">
        <li>Blog</li>
        <li>Sobre nós</li>
        <li>FAQ</li>
        <li>Política de Privacidade</li>
        <li>Termos de Serviço</li>
        <li>Trabalhe conosco</li>
        <li>Contato</li>
      </ul>

      <p className="text-center text-gray-400 py-1 ">
        © 2024 LookLoop Inc. Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
