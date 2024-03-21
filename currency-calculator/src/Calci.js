import React from "react";
import PropTypes from 'prop-types';

const Calci=(props)=>{
    const CurrencyOptions = props.CurrencyOptions;
    const firstDefault = props.firstDefault;
    const secondDefault = props.secondDefault;
    const changeAmount = props.changeAmount;
    const onChangeCurrFirst = props.onChangeCurrFirst;
    const onChangeCurrSec = props.onChangeCurrSec;
    const result = props.result;
    const initialValue = props.initialValue;
    return (
        <div>
        <h1 id='heading'>Currency Calculator</h1>
        <div className='container'>
            <input type="number" className="input" min={0} placeholder="enter value" value={initialValue} onChange={event => changeAmount(event.target.value)}/>
            <div id="select">
                <select className="sel" value={firstDefault} onChange={event=> onChangeCurrFirst(event.target.value)}>
                    {CurrencyOptions.map(options =>(
                        <option key={options} value={options}>{options}</option>
                    ))}
                </select>

                <span id="to">To</span>
                
                <select className="sel" value={secondDefault} onChange={event=> onChangeCurrSec(event.target.value)}>
                    {CurrencyOptions.map(options =>(
                        <option key={options} value={options}>{options}</option>
                    ))}
                </select>
            </div>
            <input className="input" placeholder="Result" value={result}/>
        </div>
        </div>
    )
}
Calci.propTypes = {
    onChangeCurrFirst: PropTypes.func,
    onChangeCurrSec: PropTypes.func,
    changeAmount: PropTypes.func,
    Result:PropTypes.number,
    firstDefault: PropTypes.string,
    secondDefault: PropTypes.string
}
export default Calci;