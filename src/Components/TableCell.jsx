import React, { useState, useEffect, useRef } from 'react';

import './TableCell.css';

// function useOutsideAlerter(ref) {
// 	useEffect(() => {
// 		/**
// 		 * Alert if clicked on outside of element
// 		 */
// 		function handleClickOutside(event) {
// 			if (ref.current && !ref.current.contains(event.target)) {
// 				alert('You clicked outside of me!');
// 			}
// 		}

// 		// Bind the event listener
// 		document.addEventListener('mousedown', handleClickOutside);
// 		return () => {
// 			// Unbind the event listener on clean up
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, [ref]);
// }

function TableCell({
	amountCell,
	currencyData,
	setcurrencyData,
	// item,
	// column,
	// handleFromTableCell,
	// cancelCellChange,
}) {
	// const [editIsShown, setEditIsShown] = useState(false);
	const [menuIsShown, setMenuIsShown] = useState(false);

	// const wrapperRef = useRef(null);
	// useOutsideAlerter(wrapperRef);

	const save = () => {
		console.log('save');
	};
	// const cancelCellChange = (e) => {
	// 	if (e.target) {
	// 		// функция отмены к старому значению
	// 		setMenuIsShown(false);
	// 	}
	// };

	const handleFromTableCellChange = (e) => {
		let newCurrencyData = [...currencyData];
		newCurrencyData.filter((item) => {
			// console.log(item.ccy);
			if (item.ccy == 'USD') {
				item.sale = e.target.value;
			}
		});
		setcurrencyData(newCurrencyData);

		// let [USD, EUR, RUR, BTC] = currencyData;
		// USD.sale = e.target.value;
		// setcurrencyData(newCurrencyData);
		// console.log(e.target.value);
	};

	// const handleFromTableCellTEST = (ccy) => {
	// console.log(ccy, column);
	// };

	return (
		<>
			<td
				className="table-cell"
				// onMouseEnter={() => setEditIsShown(true)}
				// onMouseLeave={() => setEditIsShown(false)}
			>
				<input
					// ref={wrapperRef}
					className="table-cell__input"
					type="number"
					value={amountCell}
					onChange={handleFromTableCellChange}
					onClick={() => {
						setMenuIsShown(true);
						// console.log(item.ccy);
						// console.log(column);
					}}
				/>
				<div className={menuIsShown ? 'modal-menu' : 'modal-menu modal-menu--hidden'}>
					<div onClick={() => save()}>save</div>
					<div onClick={() => setMenuIsShown(false)}>cancel</div>
				</div>
			</td>
		</>
	);
}

export default TableCell;
