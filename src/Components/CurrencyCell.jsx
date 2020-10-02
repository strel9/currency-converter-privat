import React from 'react';

import './CurrencyCell.css';

function CurrencyCell({
	currencyArr,
	currencyData,
	selectedCurrency,
	onChangeAmount,
	onChangeCurrency,
	amount,
	placeholder,
}) {
	return (
		<div className="currency-cell">
			<input
				className="currency-cell__input"
				type="number"
				value={amount}
				onChange={onChangeAmount}
				// placeholder={placeholder}
			/>
			<select value={selectedCurrency} onChange={onChangeCurrency}>
				{/* <option>UAH</option> */}
				{/* {console.log(currencyData)} */}
				{currencyArr.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
}

export default CurrencyCell;
