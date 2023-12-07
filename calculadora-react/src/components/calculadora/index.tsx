import { Button, Grid, Typography, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const Calculadora = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);

  const resetForm = () => {
    setNum1(0);
    setNum2(0);
    setResultado(null);
  };

  function calcular(operacao) {
    if (operacao === "soma") {
      setResultado(num1 + num2);
    } else if (operacao === "subtracao") {
      setResultado(num1 - num2);
    } else if (operacao === "divisao") {
      if (num2 === 0) {
        alert("Erro: Divisão por zero não é permitida.");
      } else {
        setResultado(num1 / num2);
      }
    } else {
      setResultado(num1 * num2);
    }
  }

  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      {resultado === null ? (
        <Grid container item xs={10} spacing={2} pb={8} pt={8}>
          <Grid item xs={6}>
            <TextField
              label="Primeiro numero"
              fullWidth
              variant="filled"
              size="small"
              type="number"
              onChange={(e) => setNum1(Number(e.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Segundo numero"
              variant="filled"
              size="small"
              type="number"
              onChange={(e) => setNum2(Number(e.target.value))}
            />
          </Grid>

          <Grid container item xs={12} display="flex" columnSpacing={2}>
            <Grid item xs={3}>
              <Button
                disabled={!(num1 && num2)}
                fullWidth
                variant="contained"
                name="calcular"
                onClick={() => calcular("soma")}
              >
                Somar
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                disabled={!(num1 && num2)}
                fullWidth
                variant="contained"
                name="calcular"
                onClick={() => calcular("subtracao")}
              >
                Subtrair
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                disabled={!(num1 && num2)}
                fullWidth
                variant="contained"
                name="calcular"
                onClick={() => calcular("multiplicacao")}
              >
                Multiplicar
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                disabled={!(num1 && num2)}
                fullWidth
                variant="contained"
                name="calcular"
                onClick={() => calcular("divisao")}
              >
                Dividir
              </Button>
            </Grid>
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

export default Calculadora;
