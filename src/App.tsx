import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Button from './components/atoms/button/button.component';
import MathFunctions from './components/organisms/math-functions-menu/math-functions.component';
import OtherFunctions from './components/organisms/other-functions-menu/other-functions.component';
import AdditionComponent from './components/organisms/math-functions/addition/addition.component';
import SubtractionComponent from './components/organisms/math-functions/subtraction/subtraction.component';
import MultiplicationComponent from './components/organisms/math-functions/multiplication/multiplication.component';
import DivisionComponent from './components/organisms/math-functions/division/division.component'
import PrimeCheckComponent from './components/organisms/math-functions/prime-check/prime-check.component';
import FactorialComponent from './components/organisms/math-functions/factorial/factorial.component';
import VowelCountComponent from './components/organisms/math-functions/vovel-count/vowel-count.component';
import FibonacciComponent from './components/organisms/math-functions/fibonacci/fibonacci.component';

import ApiDataFetcher from './components/molecules/other-functions/api-data-fetcher/api-data-fetcher.component';
import CsvLoader from './components/molecules/other-functions/csv-loader/csv-loader.component';
import DelayFunction from './components/molecules/other-functions/delay/delay.component';

import './App.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Routes>
          <Route path="/" element={
            <div className="menu-grid">
              <Link to="/math">
                <Button label="Funkcje matematyczne" />
              </Link>
              <Link to="/other">
                <Button label="Inne funkcje" />
              </Link>
            </div>
          } />

          <Route path="/math/*" element={
            <>
              <Routes>
                <Route path="/" element={<MathFunctions />} />
                <Route path="addition" element={<AdditionComponent operation="addition" />} />
                <Route path="subtraction" element={<SubtractionComponent operation="subtraction" />} />
                <Route path="multiplication" element={<MultiplicationComponent operation="multiplication" />} />
                <Route path="division" element={<DivisionComponent operation="division" />} />
                <Route path="prime-check" element={<PrimeCheckComponent operation="prime-check" />} />
                <Route path="factorial" element={<FactorialComponent operation="factorial" />} />
                <Route path="fibonacci" element={<FibonacciComponent operation="fibonacci" />} />
                <Route path="vowel-count" element={<VowelCountComponent operation="vowel-count" />} />
              </Routes>
            </>
          }>
          </Route>

          <Route path="/other/*" element={
            <div>
              <Routes>
                <Route path="/" element={<OtherFunctions />} />
                <Route path="csv-loader" element={<CsvLoader />} />
                <Route path="api-data-fetcher" element={<ApiDataFetcher />} />
                <Route path="delay" element={<DelayFunction />} />
              </Routes>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
