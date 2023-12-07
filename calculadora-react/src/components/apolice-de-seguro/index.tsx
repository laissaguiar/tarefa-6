import { Button, Grid, Typography, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const ApoliceSeguro = () => {
  const [nome, setNome] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [idade, setIdade] = useState<number>(0);
  const [valor, setValor] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  function calculo() {
    switch (sexo) {
      case "masculino":
        if (idade <= 25) {
          setResultado(0.15 * valor);
        } else {
          setResultado(0.1 * valor);
        }
        break;
      case "feminino":
        setResultado(0.08 * valor);
        break;
      default:
        setResultado(0);
        break;
    }
  }

  const resetForm = () => {
    setNome("");
    setSexo("");
    setIdade(0);
    setValor(0);
    setResultado(0);
    setShowResult(false);
  };

  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      {!showResult ? (
        <Grid container item xs={8} spacing={2} pb={8} pt={8}>
          <Grid item xs={6}>
            <TextField
              required
              label="Nome do segurado"
              fullWidth
              variant="filled"
              size="small"
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              label="Sexo"
              variant="filled"
              size="small"
              onChange={(e) => setSexo(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Idade"
              fullWidth
              variant="filled"
              size="small"
              onChange={(e) => setIdade(Number(e.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Valor do automóvel"
              fullWidth
              variant="filled"
              size="small"
              onChange={(e) => setValor(Number(e.target.value))}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              name="calcular"
              onClick={calculo}
              disabled={
                nome === "" || sexo === "" || idade === 0 || valor === 0
              }
            >
              Calcular apólice
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container item xs={8} md={5} lg={3} spacing={2} pb={8} pt={8}>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography pb={4} variant="h6" textAlign="center">
              Resultado: {resultado}
            </Typography>
            <Button variant="contained" name="calcular" onClick={resetForm}>
              Recalcular
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
export default ApoliceSeguro;
