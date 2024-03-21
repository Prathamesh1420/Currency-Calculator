import React, { useState } from "react";
import "./App.css";
import Calci from "./Calci";
//object of currency rates
const Curr_val = {
  rates: {
    INR: 78.3625,
    HKD: 8.5168,
    ISK: 137.9,
    PHP: 55.816,
    DKK: 7.4724,
    CZK: 25.03,
    AUD: 1.6417,
    RON: 4.7613,
    SEK: 10.5455,
    IDR: 15.063,
    EUR: 1.25,
  },
  base: "EUR",
};

function App() {
  //setting first currency option as default
  const def1 = Curr_val.base;
  const [firstDefault, setFirstDefault] = useState(def1);

  //setting second currency option as default
  const def2 = Object.keys(Curr_val.rates)[0];
  const [secondDefault, setSecondDefault] = useState(def2);

  //amount for input
  const [Amount, setAmount] = useState();

  //result for output
  const [Result, setResult] = useState();

  //function for change in amount and calculate the select currency options
  function onAmountChange(Amount) {
    setAmount(Amount);
    setResult(
      (Amount * Curr_val.rates[secondDefault]) / Curr_val.rates[firstDefault]
    );
  }

  //function for change in first currency option and runtime calculate result
  function onCurrencyChange1(firstDefault) {
    setFirstDefault(firstDefault);
    if (Amount > 0)
      setResult(
        (Amount * Curr_val.rates[secondDefault]) / Curr_val.rates[firstDefault]
      );
  }

  //function for change in second currency option and runtime calculate result
  function onCurrencyChange2(secondDefault) {
    setSecondDefault(secondDefault);
    if (Amount > 0)
      setResult(
        (Amount * Curr_val.rates[secondDefault]) / Curr_val.rates[firstDefault]
      );
  }

  return (
    <div className="App">
      <Calci
        CurrencyOptions={Object.keys(Curr_val.rates)}
        firstDefault={firstDefault}
        secondDefault={secondDefault}
        changeAmount={onAmountChange}
        //passing function (and in function passing first currency)
        onChangeCurrFirst={onCurrencyChange1}
        //passing function (and in function passing second currency)
        onChangeCurrSec={onCurrencyChange2}
        result={Result}
      ></Calci>
    </div>
  );
}

export default App;
