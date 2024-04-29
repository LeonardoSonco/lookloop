import imageEmployee from "../../assets/employee1.png";
import ChangeButton from "../ChangeButton";

import "./index.css";
const CardEmployee: React.FC = () => {
  return (
    <div className=" p-5 shadow-shadowBox rounded-3xl flex gap-8 ">
      <div className="pr-8 border-r-2 border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={imageEmployee}
            alt="Foto do funcionario da barbearia"
            className="imageRadius w-32 h-32"
          />
          <div>
            <h4 className="font-bold text-2xl ">Jorge Almeida</h4>
            <span className="font-bold text-lg text-orange-600">
              Proprietário
            </span>
          </div>
        </div>
        <p>Cadastro Realizado: 18/03/2024</p>
        <span>Cpf: 515.251.512.03</span>
        <p className="pt-5 font-semibold">Salário semanal: R$ 720,00</p>
      </div>

      <div className="flex flex-col justify-around">
        <div>
          <div className="flex justify-between pb-4">
            <p className="font-medium">Cortes na Semana </p>
            <span className="shadow-shadowBox w-14 text-center rounded-md">
              32
            </span>
          </div>

          <div className="flex justify-between pb-4">
            <p className="font-medium">Comissão da empresa </p>
            <span className="shadow-shadowBox w-14  text-center rounded-md">
              100%
            </span>
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-4 gap-10">
            <p className="font-medium">Faturamento semanal </p>
            <span className="shadow-shadowBox w-fit px-2 rounded-md">
              R$ 960,00
            </span>
          </div>

          <div className="flex justify-between pb-4 gap-10 ">
            <p className="font-medium">Comissão semanal</p>
            <span className="shadow-shadowBox w-fit px-2 rounded-md">
              R$ 240,00
            </span>
          </div>
        </div>
      </div>
      <ChangeButton />
    </div>
  );
};

export default CardEmployee;
