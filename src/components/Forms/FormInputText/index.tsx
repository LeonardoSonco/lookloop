import "./index.css";

interface FormInputProps {
  name: string;
  type: string;
  label: string;
  //setValue?: any;
}

export const FormInputText = ({name,  type, label }: FormInputProps) => {
  
  console.log(name)
  //const [cpf, setCpf] = React.useState("");
 /* const handleCpfFormat = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value.replace(/\D/g, ""); // Remove todos os caracteres que não são números
    let formattedValue = "";

    if (value.length <= 11) {
      if (value.length <= 3) {
        formattedValue = value;
      } else if (value.length <= 6) {
        formattedValue = `${value.substr(0, 3)}.${value.substr(3)}`;
      } else if (value.length <= 9) {
        formattedValue = `${value.substr(0, 3)}.${value.substr(
          3,
          3
        )}.${value.substr(6)}`;
      } else {
        formattedValue = `${value.substr(0, 3)}.${value.substr(
          3,
          3
        )}.${value.substr(6, 3)}-${value.substr(9)}`;
      }

      setCpf(formattedValue);
    } else {
      alert("CPF SO PODE TER 11 NUMEROS");
    }
  };*/

  return (
    <div className="relative h-11 w-full mb-4 ">
      <input
        type={type}
        placeholder={label}
        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
      />
      <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
    </div>
  );
};
