import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import DialogTitle from "@mui/material/DialogTitle";
import { PlusSquare } from "react-feather";

import { MenuItem, TextField } from "@mui/material";

const ModalAddServices: React.FC = () => {
  const [openModal, setopenModal] = React.useState(false);

  const handleClickopenModal = () => {
    setopenModal(true);
  };

  const handleClose = () => {
    setopenModal(false);
  };

  const [formState, setFormState] = React.useState({
    userRoles: [],
  });

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
  console.log(typeof(onchange));
  return (
    <React.Fragment>
      <button onClick={handleClickopenModal} className="flex">
        <span className="text-purple text-base font-semibold ">
          Adicionar Serviço
        </span>
        <PlusSquare color="#ffffff" fill="#413B6B" size={25} strokeWidth={1} />
      </button>
      <Dialog
        open={openModal}
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
      >
        <DialogTitle>Adicionar Serviço</DialogTitle>

        <TextField
          sx={{ margin: 2 }}
          select
          name="userRoles"
          id="userRoles"
          variant="outlined"
          label="userRoles"
          SelectProps={{
            multiple: true,
            value: formState.userRoles,
            onChange: handleFieldChange,
          }}
        >
          <MenuItem value="Degrade">Degrade</MenuItem>
          <MenuItem value="Degrade + Barba">Degrade + Barba</MenuItem>
          <MenuItem value="Barba">Barba</MenuItem>
        </TextField>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Adicionar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ModalAddServices;
