import { Button, Grid, Typography, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const CalcularMedia = () => {
  const [ac1, setAct1] = useState<string>("");
  const [ac2, setAct2] = useState<string>("");
  const [ag, setAg] = useState<string>("");
  const [af, setAf] = useState<string>("");
  const [resultado, setResultado] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const calculo = () => {
    setResultado(
      Number(ac1) * 0.15 +
        Number(ac2) * 0.3 +
        Number(ag) * 0.1 +
        Number(af) * 0.45
    );
    setShowResult(true);
  };

  const resetForm = () => {
    setAct1("");
    setAct2("");
    setAg("");
    setAf("");
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
              label="Nota da AC1"
              fullWidth
              variant="filled"
              size="small"
              onChange={(e) => setAct1(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              label="Nota da AC2"
              variant="filled"
              size="small"
              onChange={(e) => setAct2(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Nota da AG"
              fullWidth
              variant="filled"
              size="small"
              onChange={(e) => setAg(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Nota da AF"
              fullWidth
              variant="filled"
              size="small"
              onChange={(e) => setAf(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              name="calcular"
              onClick={calculo}
              disabled={ac1 === "" || ac2 === "" || ag === "" || af === ""}
            >
              Calcular
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
export default CalcularMedia;
