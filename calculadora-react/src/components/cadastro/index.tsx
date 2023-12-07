import { Button, Grid, Typography, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const Cadastro = () => {
  const [name, setName] = useState<string>("");
  const [ra, setRa] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Nome: ${name}, RA: ${ra}, Email: ${email}, phone: ${phone}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container item xs={8} spacing={2} pb={8} pt={8}>
          <Grid item xs={12}>
            <Typography variant="h6" textAlign="center">
              Cadastro
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Nome"
              fullWidth
              variant="filled"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="RA"
              variant="filled"
              size="small"
              value={ra}
              onChange={(e) => setRa(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Email"
              fullWidth
              variant="filled"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Celular"
              fullWidth
              variant="filled"
              size="small"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="error"
              disabled={
                name === "" && phone === "" && ra === "" && email === ""
              }
              onClick={() => {
                setName("");
                setRa("");
                setPhone("");
                setEmail("");
              }}
            >
              Limpar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={
                name === "" || phone === "" || ra === "" || email === ""
              }
            >
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Cadastro;
