import React from 'react';


export function SelectInput  ({
     headerText = '',
     optionArr = []
}) {
     return (
		<label>
			<p class="text-title text-xsm bold">{headerText}</p>
			<select>
				<option>Other</option>
                    { optionArr.length >= 1 ? optionArr.map((v, i) => <option>{v.name}</option>)  : null }
			</select>
		</label>
	)
}