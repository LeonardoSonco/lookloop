import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

interface ButtonProps {
  label: string;
}
const FormButton = ({ label }: ButtonProps) => {
  const ButtonStyle = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",

    lineHeight: 1.5,
    marginBottom: "15px",
    color: "rgb(109 40 217)",

    "&:hover": {
      backgroundColor: "rgb(245 243 255)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#6D28D9",
      borderColor: "#6D28D9",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.1rem rgba(119, 0, 255, 0.5)",
    },
  });

  return <ButtonStyle>{label}</ButtonStyle>;
};

export default FormButton;
