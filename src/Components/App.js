import React, { useEffect, useState } from 'react';

import Header from './Header';
import Table from './Table';
import Spinner from './Spinner';
import Error from './Error';
import FormConverter from './FormConverter';
import Footer from './Footer';

import { useLocalState } from '../hooks';
import './App.css';
// import { noAuto } from '@fortawesome/fontawesome-svg-core';

const BASE_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
let fromAmount, toAmount;

function App() {
	const [currencyData, setcurrencyData] = useState();

	const [currencyArr, setCurrencyArr] = useState(['UAH', 'USD', 'EUR', 'RUR', 'BTC']);
	// const [currencyArr2, setCurrencyArr2] = useState(['UAH', 'USD', 'EUR', 'RUR', 'BTC']);

	const [fromCurrency, setfromCurrency] = useState();
	const [toCurrency, setToCurrency] = useState();

	// const [amount, setAmount] = useState();
	const [fromAmountState, setFromAmountState] = useState();
	const [toAmountState, setToAmountState] = useState();

	const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
	const [exchangeRate, setExchangeRate] = useState();
	// const [сurrencyBuy, setсurrencyBuy] = useState(true); // при нажатии на кнопку делаю фолс и выбираю из курсов SALE

	const [queryCounter, setQueryCounter] = useLocalState('queryCounter');
	const [isLoading, setIsLoading] = useState(true);

	let fromAmount, toAmount;
	if (amountInFromCurrency) {
		fromAmount = fromAmountState;
		toAmount = fromAmount * exchangeRate;
	} else {
		toAmount = toAmountState;
		fromAmount = fromAmountState / exchangeRate;
	}

	useEffect(() => {
		if (queryCounter < 5) {
			setQueryCounter(+queryCounter + 1);
		} else {
			setQueryCounter(1);
		}

		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => {
				setcurrencyData(data);
				setIsLoading(false);
				setfromCurrency(data[0].base_ccy);
				setToCurrency(data[0].ccy);
				setExchangeRate(data[0].sale);
				// console.log('useF1');
				console.log(data);
			});
	}, []);

	useEffect(() => {
		// fetch(BASE_URL)
		// .then((res) => res.json())
		// .then((data) => {
		//
		// if (fromCurrency === 'UAH') {
		// 	setCurrencyArr2(['USD', 'EUR', 'RUR']);
		// }
		// if (fromCurrency === 'USD') {
		// 	setCurrencyArr2(['UAH', 'BTC']);
		// }
		if (fromCurrency === 'EUR') {
			// 	setCurrencyArr2(['UAH']);
			setExchangeRate(currencyData[1].sale);
		}
		if (fromCurrency === 'RUR') {
			// 	setCurrencyArr2(['UAH']);
			setExchangeRate(currencyData[2].sale);
		}
		// if (fromCurrency === 'BTC') {
		// 	setCurrencyArr2(['USD']);
		// }
		// //
		if (toCurrency === 'USD') {
			setExchangeRate(currencyData[0].sale);
			// 	setCurrencyArr1(['UAH', 'BTC']);
		}
		if (toCurrency === 'BTC') {
			setExchangeRate(currencyData[0].sale);
			// 	setCurrencyArr1(['USD']);
		}
		if (toCurrency === 'UAH') {
			setExchangeRate(currencyData[0].sale);
			// setCurrencyArr1(['USD', 'EUR', 'RUR']);
		}
		if (toCurrency === 'RUR') {
			// setExchangeRate(currencyData[0].sale);
			// 	setCurrencyArr1(['UAH']);
		}
		// console.log(currencyData);
		// console.log('useF2');
		// });
	}, [fromCurrency, toCurrency]);

	const handleFromAmountChange = (e) => {
		// setAmount(e.target.value);
		setFromAmountState(e.target.value);
		setAmountInFromCurrency(true);
	};

	const handleToAmountChange = (e) => {
		// setAmount(e.target.value);
		setToAmountState(e.target.value);
		// toAmountZ = e.target.value;
		setAmountInFromCurrency(false);
	};

	// const setArrOfCurrency = () => {
	// 	const arr = [];
	// 	for (let key in currencyData) {
	// 		if (key === 'ccy' || 'base_ccy') {
	// 			arr.push(currencyData[key].base_ccy);
	// 			arr.push(currencyData[key].ccy);
	// 		}
	// 	}
	// 	const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
	// 	return newArr;
	// };

	// console.log(setArrOfCurrency());

	// setCurrencyArr(setArrOfCurrency());

	const exchangeRateChuser = () => {
		const newFromCurrency = toCurrency;
		const newToCurrency = fromCurrency;
		setfromCurrency(newFromCurrency);
		setToCurrency(newToCurrency);
		// setExchangeRate(40);

		const newFromAmount = fromAmount;
		const newToAmount = toAmount;
		console.log(newFromAmount);
		console.log(newToAmount);
		console.log(fromAmount);
		console.log(toAmount);

		// fromAmount = newToAmount;
		// toAmount = newFromAmount;
		setFromAmountState(newToAmount);
		setToAmountState(newFromAmount);
	};

	const rateSelect = () => {
		if (currencyData) {
			const z = currencyData.filter((item) => Object.values(item).filter((item) => item === 'USD'));
			console.log(z);
		}
	};
	rateSelect();

	//

	// const rateSelect = () => {
	// 	if (currencyData) {
	// 		const z = currencyData.map((item) => console.log(Object.values(item)));
	// 		// console.log(z);
	// 	}
	// };
	// rateSelect();

	// console.log(currencyData);

	// function TEST(q, w) {
	// console.log(q);
	// console.log(w);
	// }

	// function currencyChangePlace() {}

	return (
		<div className="app">
			<Header />

			<main className="app-main">
				{isLoading ? (
					<Spinner />
				) : queryCounter === 5 ? (
					<Error />
				) : (
					<Table
						currencyData={currencyData}
						setcurrencyData={setcurrencyData}
						// handleFromTableCell={handleFromTableCell}
						// TEST={TEST}
						// cancelCellChange={cancelCellChange}
					/>
				)}
				<FormConverter
					currencyArr={currencyArr}
					// currencyArr2={currencyArr2}
					currencyData={currencyData}
					fromCurrency={fromCurrency}
					toCurrency={toCurrency}
					setfromCurrency={setfromCurrency}
					setToCurrency={setToCurrency}
					handleFromAmountChange={handleFromAmountChange}
					handleToAmountChange={handleToAmountChange}
					fromAmount={fromAmount}
					toAmount={toAmount}
					// fromAmountState={fromAmountState}
					// toAmountState={toAmountState}
					exchangeRateChuser={exchangeRateChuser}
					// convert={convert}
				/>
			</main>

			<Footer />
		</div>
	);
}

export default App;
