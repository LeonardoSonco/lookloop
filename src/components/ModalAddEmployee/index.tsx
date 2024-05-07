import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { PlusSquare } from "react-feather";
import { Box, MenuItem } from "@mui/material";
import { FormInputText } from "../Forms/FormInputText";
import FormButton from "../Forms/FormButton";

export default function ModalAddEmployee() {
  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState(
    "https://cdn.discordapp.com/attachments/869643518757457950/1237449160677003374/icon-image-not-found-free-vector.png?ex=663bafd6&is=663a5e56&hm=b30cad97d802cd078d54080e6f43ab20d696020946bee92815cec066aabbeac9&"
  );

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChangePhoto(event: any) {
    setPhoto(URL.createObjectURL(event.target.files[0]));
    URL.revokeObjectURL(photo);
  }

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
          component: "div",
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

        <form action="" className="mx-4 ">
          <div className="mb-4">
            <div className="flex items-center space-x-6">
              <label htmlFor="file-upload" className="shrink-0">
                <img
                  id="preview_img"
                  className="h-16 w-16 object-cover rounded-full"
                  src={photo}
                  alt="Current profile photo"
                />
              </label>
              <input
                type="file"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                accept="image/*"
                id="file-upload"
                onChange={(event) => {
                  handleChangePhoto(event);
                }}
              />
            </div>
          </div>
          <FormInputText name="nome" type="text" label="Nome" />
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
          <FormButton label="Cancelar" />
          <FormButton label="Adicionar Funcionário" />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
/* <Button onClick={handleClose} >Cancelar</Button>
          <Button type="submit">Adicionar Funcionário</Button> */
