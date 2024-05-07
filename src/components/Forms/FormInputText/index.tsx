import { useState } from "react";
import "./index.css";

interface FormInputProps {
  name: string;
  type: string;
  label: string;
  //setValue?: any;
}

export const FormInputText = ({ name, type, label }: FormInputProps) => {
  const [valueInput, setValueInput] = useState("");

  const handleInputFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case "nome":
        setValueInput(event.target.value);
        break;
      case "cpf":
        formatCPF(event.target.value);
        break;
      case "email":
        setValueInput(event.target.value);
        break;
      case "cep":
        formatCep(event.target.value);
        break;
      case "comissao":
        setValueInput(event.target.value);
        break;
      case "celular":
        formatPhone(event.target.value);
        break;
      case "cargo":
        setValueInput(event.target.value);
        break;
      default:
        break;
    }
  };

  function formatCPF(cpf: string) {
    const valueNotCharacter = cpf.replace(/\D/g, "");
    let formattedValue = "";

    if (valueNotCharacter.length <= 11) {
      if (valueNotCharacter.length <= 3) {
        formattedValue = valueNotCharacter;
      } else if (valueNotCharacter.length <= 6) {
        formattedValue = `${valueNotCharacter.substr(
          0,
          3
        )}.${valueNotCharacter.substr(3)}`; // pega os 3 primeiros valores da varieval acrescenta o ponto e coloca o restanto das
      } else if (valueNotCharacter.length <= 9) {
        formattedValue = `${valueNotCharacter.substr(
          0,
          3
        )}.${valueNotCharacter.substr(3, 3)}.${valueNotCharacter.substr(6)}`; // pega os 3 primeiros
      } else {
        formattedValue = `${valueNotCharacter.substr(
          0,
          3
        )}.${valueNotCharacter.substr(3, 3)}.${valueNotCharacter.substr(
          6,
          3
        )}-${valueNotCharacter.substr(9)}`;
      }

      setValueInput(formattedValue);
    } else {
      alert("CPF SO PODE TER 11 ");
    }
  }

  function formatPhone(phone: string) {
    const valueNotCharacter = phone.replace(/\D/g, "");
    let formattedValue = "";

    if (valueNotCharacter.length <= 11) {
      if (valueNotCharacter.length <= 2) {
        formattedValue = valueNotCharacter;
      } else if (valueNotCharacter.length <= 6) {
        formattedValue = `(${valueNotCharacter.substr(
          0,
          2
        )}) ${valueNotCharacter.substr(2)}`;
      } else if (valueNotCharacter.length <= 11) {
        formattedValue = `(${valueNotCharacter.substr(
          0,
          2
        )}) ${valueNotCharacter.substr(2, 5)}${valueNotCharacter.substr(7)}`;
      }
      setValueInput(formattedValue);
    } else {
      alert("NUMEOR PASSOU de 11");
    }

    console.log(`Telefone ${valueNotCharacter}`);
  }

  function formatCep(cep: string) {
    const valueNotCharacter = cep.replace(/\D/g, "");
    let formattedValue = "";
    //99875-503
    if (valueNotCharacter.length <= 8) {
      if (valueNotCharacter.length <= 5) {
        formattedValue = valueNotCharacter;
      } else {
        formattedValue = `${valueNotCharacter.substr(
          0,
          5
        )}-${valueNotCharacter.substr(5)}`;
      }
      setValueInput(formattedValue);
    } else {
      alert("NUMEOR PASSOU de 8");
    }
  }

  return (
    <div className="relative h-11 w-full mb-4 ">
      <input
        type={type}
        placeholder={label}
        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
        onChange={(event) => handleInputFormat(event)}
        value={valueInput}
      />
      <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
    </div>
  );
};
