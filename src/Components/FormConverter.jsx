import React from 'react';
import CurrencyCell from './CurrencyCell';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

import './FormConverter.css';

// const placeholder1 = 100;
// const placeholder2 = 0;

function FormConverter({
	currencyArr,
	// currencyArr2,
	currencyData,
	fromCurrency,
	toCurrency,
	setfromCurrency,
	setToCurrency,
	handleFromAmountChange,
	handleToAmountChange,
	fromAmount,
	toAmount,
	exchangeRateChuser,
}) {
	return (
		<div className="app-form-converter">
			<label>
				<span>Change</span>
				<CurrencyCell
					currencyArr={currencyArr}
					currencyData={currencyData}
					selectedCurrency={fromCurrency}
					onChangeCurrency={(e) => setfromCurrency(e.target.value)}
					onChangeAmount={handleFromAmountChange}
					amount={fromAmount}
					// placeholder={placeholder1}
				/>
			</label>
			
			{/* <button className="app-form-btn" onClick={() => exchangeRateChuser()}>
				<FontAwesomeIcon icon={faExchangeAlt} />
			</button> */}

			<label>
				<span>Get</span>
				<CurrencyCell
					currencyArr={currencyArr}
					currencyData={currencyData}
					selectedCurrency={toCurrency}
					onChangeCurrency={(e) => setToCurrency(e.target.value)}
					onChangeAmount={handleToAmountChange}
					amount={toAmount}
					// placeholder={placeholder2}
				/>
			</label>
		</div>
	);
}

export default FormConverter;
