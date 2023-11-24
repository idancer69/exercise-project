import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { CssBaseline, GlobalStyles, Grid } from "@mui/material";

import BaseButton from "./components/atoms/button/button.component";
import ApiDataFetcher from "./components/molecules/other-functions/api-data-fetcher/api-data-fetcher.component";
import CsvLoader from "./components/molecules/other-functions/csv-loader/csv-loader.component";
import DelayFunction from "./components/molecules/other-functions/delay/delay.component";
import AdditionComponent from "./components/organisms/math-functions/addition/addition.component";
import DivisionComponent from "./components/organisms/math-functions/division/division.component";
import FactorialComponent from "./components/organisms/math-functions/factorial/factorial.component";
import FibonacciComponent from "./components/organisms/math-functions/fibonacci/fibonacci.component";
import MultiplicationComponent from "./components/organisms/math-functions/multiplication/multiplication.component";
import PrimeCheckComponent from "./components/organisms/math-functions/prime-check/prime-check.component";
import SubtractionComponent from "./components/organisms/math-functions/subtraction/subtraction.component";
import VowelCountComponent from "./components/organisms/math-functions/vovel-count/vowel-count.component";
import MathFunctions from "./components/organisms/math-functions-menu/math-functions.component";
import OtherFunctions from "./components/organisms/other-functions-menu/other-functions.component";
import { PathConstants } from "./PathConstants";

const globalStyles = `
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #366a4b;
  }
`;

interface Link {
  to: string;
  label: string;
}

const links: Link[] = [
  { to: PathConstants.MATH, label: "Funkcje matematyczne" },
  { to: PathConstants.OTHER, label: "Inne funkcje" },
];

const Home: React.FC<{ links: Link[] }> = ({ links }) => (
  <Grid container spacing={2} justifyContent="center">
    {links.map((link, index) => (
      <Grid item key={index}>
        <Link to={link.to}>
          <BaseButton
            label={link.label}
            sx={{
              width: 300,
              height: 300,
              fontSize: { xs: "initial", sm: "1.5rem" },
            }}
          />
        </Link>
      </Grid>
    ))}
  </Grid>
);

const MathRoutes = () => (
  <Routes>
    <Route index element={<MathFunctions />} />
    <Route
      path="addition"
      element={<AdditionComponent operation="addition" />}
    />
    <Route
      path="subtraction"
      element={<SubtractionComponent operation="subtraction" />}
    />
    <Route
      path="multiplication"
      element={<MultiplicationComponent operation="multiplication" />}
    />
    <Route
      path="division"
      element={<DivisionComponent operation="division" />}
    />
    <Route
      path="prime-check"
      element={<PrimeCheckComponent operation="prime-check" />}
    />
    <Route
      path="factorial"
      element={<FactorialComponent operation="factorial" />}
    />
    <Route
      path="fibonacci"
      element={<FibonacciComponent operation="fibonacci" />}
    />
    <Route
      path="vowel-count"
      element={<VowelCountComponent operation="vowel-count" />}
    />
  </Routes>
);

const OtherRoutes = () => (
  <Routes>
    <Route index element={<OtherFunctions />} />
    <Route path="csv-loader" element={<CsvLoader />} />
    <Route path="api-data-fetcher" element={<ApiDataFetcher />} />
    <Route path="delay" element={<DelayFunction />} />
  </Routes>
);

const routes = [
  { path: PathConstants.HOME, element: <Home links={links} /> },
  { path: PathConstants.MATH, element: <MathRoutes /> },
  { path: PathConstants.OTHER, element: <OtherRoutes /> },
];

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Grid>
    </Router>
  );
};

export default App;
