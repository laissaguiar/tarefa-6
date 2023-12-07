import { Accordion, AccordionSummary, Grid } from "@mui/material";
import React from "react";
import Calculadora from "./components/calculadora/index.tsx";
import CalcularMedia from "./components/calcular-media/index.tsx";
import Cadastro from "./components/cadastro/index.tsx";
import ApoliceSeguro from "./components/apolice-de-seguro/index.tsx";

const App = () => {
  return (
    <Grid
      minHeight="100vh"
      pt={8}
      pb={8}
      height="100%"
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#bae1ff",
      }}
    >
      <Grid item xs={6}>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            Calcular Média
          </AccordionSummary>
          <CalcularMedia />
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            Calculadora
          </AccordionSummary>
          <Calculadora />
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            Cadastro de aluno
          </AccordionSummary>
          <Cadastro />
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            Apólice de seguro
          </AccordionSummary>
          <ApoliceSeguro />
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default App;
