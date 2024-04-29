import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { PlusSquare } from "react-feather";
import { Box, MenuItem } from "@mui/material";
import { FormInputText } from "../Forms/FormInputText";

export default function ModalAddEmployee() {
  const [open, setOpen] = React.useState(false);
 

  const [formState, setFormState] = React.useState({
    servicos: [],
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFieldChange = (event: any) => {
    setFormState((formState) => ({
      ...formState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };



  return (
    <React.Fragment>
      <button onClick={handleClickOpen} className="flex">
        <span className="text-purple text-lg font-semibold ">
          Adicionar Funcionário
        </span>
        <PlusSquare color="#ffffff" fill="#413B6B" size={30} strokeWidth={1} />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        fullWidth
      >
        <DialogTitle className="text-center">Adicionar Funcionário</DialogTitle>

        <form action="" className="mx-2 ">
          <FormInputText name="name" type="text" label="Nome" />
          <FormInputText name="email" type="email" label="Email" />

          <div className="flex justify-between gap-5">
            <FormInputText name="cpf" type="text" label="CPF" />
            <FormInputText name="celular" type="text" label="Celular" />
          </div>
          <FormInputText name="cargo" type="text" label="Cargo" />

          <div className="flex justify-between gap-4">
            <FormInputText name="cep" type="text" label="CEP" />
            <FormInputText name="comissao" type="text" label="Comissão" />
          </div>
        </form>

        <Box component="fieldset" sx={{ p: 2 }}>
          <TextField
            sx={{ width: 1 }}
            select
            name="servicos"
            id="servicos"
            variant="outlined"
            label="Serviços"
            SelectProps={{
              multiple: true,
              value: formState.servicos,
              onChange: handleFieldChange,
            }}
          >
            <MenuItem value="Degrade">Degrade</MenuItem>
            <MenuItem value="Degrade + Barba">Degrade + Barba</MenuItem>
            <MenuItem value="Barba">Barba</MenuItem>
          </TextField>
        </Box>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Adicionar Funcionário</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
