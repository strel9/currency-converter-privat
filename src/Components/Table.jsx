import React from 'react';
import TableCell from './TableCell';

import './Table.css';
// const sale = 'sale';
// const buy = 'buy';

function Table({ currencyData, setcurrencyData }) {



	return (
		<>
			<table className="table">
				<tbody>
					<thead>
						<td>Currency/Current Date</td>
						<td>Buy</td>
						<td>Sell</td>
					</thead>
					<tbody>
						{/* {console.log(currencyData)} */}
						{currencyData.map((item) => (
							<tr>
								<td>{`${item.ccy}/${item.base_ccy}`}</td>
								<TableCell
									currencyData={currencyData}
									setcurrencyData={setcurrencyData}
									amountCell={item.buy}
									// row={}
									// column={buy}
									// item={item}
									// TEST={TEST}
									// handleFromTableCell={handleFromTableCell}
									// cancelCellChange={cancelCellChange}
								/>
								<TableCell
									currencyData={currencyData}
									setcurrencyData={setcurrencyData}
									amountCell={item.sale}
									// column={sale}
									// item={item}
									// TEST={TEST}
									// handleFromTableCell={handleFromTableCell}
									// cancelCellChange={cancelCellChange}
								/>
							</tr>
						))}
					</tbody>
				</tbody>
			</table>
		</>
	);
}

export default Table;
