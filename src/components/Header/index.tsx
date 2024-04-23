import style from "./index.module.css";
import { Bell, User } from "react-feather";
import { useMenuContext } from "../../context/MenuContext";

const Header: React.FC = () => {
  //const [isNavOpen, setIsNavOpen] = useState(false);
  const { isNavOpen, setIsNavOpen, setWindowSize } = useMenuContext();

  return (
    <header
      className={`flex bg-gray_header justify-between items-center pr-10 pl-14 bg-purple h-16 rounded-b-large ${
        isNavOpen ? `${style.shift_conten} ${style.shifted}` : ""
      }
  
`}
    >
      <nav>
        <section className="flex justify-between">
          <div
            className={`HAMBURGER-ICON space-y-1.5 cursor-pointer ${
              isNavOpen ? style.hideMenuNav : ""
            } `}
            onClick={() => {
              setIsNavOpen((prev) => !prev);
              setWindowSize(innerWidth - 200);
            }}
          >
            <span className="block h-1 w-9 bg-greenHamburguer rounded-sm"></span>
            <span className="block  h-1 w-7 bg-greenHamburguer rounded-sm"></span>
            <span className="block  h-1 w-5 bg-greenHamburguer rounded-sm"></span>
          </div>

          <div className={isNavOpen ? style.showMenuNav : style.hideMenuNav}>
            <div
              className="CROSS-ICON absolute top-0 left-0 pl-8  pr-3 pt-6 flex w-full justify-between items-center"
              onClick={() => {
                setIsNavOpen(false);
                setWindowSize(innerWidth);
              }}
            >
              <h1 className="text-white text-2xl font-semibold">LookLoop</h1>
              <svg
                className="h-9 w-9 text-greenHamburguer pl-1 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul
              className={`flex flex-col  w-full text-start gap-1 ${style.menuHover}`}
            >
              <li id="companyName" className="py-2 mt-2 pl-4">
                Bosky Barbearia
              </li>
              <li id="line" className="border-t-2 mx-2 mt-2"></li>
              <li className="py-2 mt-2 pl-4">Dashboard</li>
              <li className="py-2 pl-4">Minha Agenda</li>
              <li className="py-2 pl-4">Funcionários</li>
            </ul>

            <ul
              className={`flex flex-col w-full text-start gap-1 ${style.menuHover}`}
            >
              <li id="line" className="border-t-2 mx-2 mt-3"></li>
              <li className="py-2 mt-2 pl-4">Serviços/Produtos</li>
              <li className="py-2 pl-4">Promoções</li>
              <li className="py-2 pl-4">Clientes</li>
              <li className="py-2 pl-4">Enviar Mensagem</li>
              <li id="line" className="border-t-2 mx-2 mt-2"></li>
            </ul>

            <ul
              className={`flex flex-col  w-full text-start gap-1 ${style.menuHover}`}
            >
              <li className="py-2 mt-2 pl-4">Assinatura</li>
              <li className="py-2 pl-4">Dados Fiscais</li>
              <li className="py-2 pl-4">Suporte</li>
              <li className="py-2 pl-4">Sair</li>
            </ul>
          </div>
        </section>
      </nav>
      <div>
        <h3 className="text-white text-xl font-semibold">Minha Agenda</h3>
      </div>

      <div className="flex gap-4">
        <Bell color="#98FFA2" strokeWidth={2.5} />
        <User color="#98FFA2" strokeWidth={3} />
      </div>
    </header>
  );
};
export default Header;
