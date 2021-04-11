import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { ApiData } from '../../types';

interface FilterProps {
	regionFilter: string;
	setRegionFilter: Dispatch<SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ regionFilter, setRegionFilter }) => {
	return (
		<div>
			<select value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)}>
				<option value="">Filter by Region</option>
				<option value="">All</option>
				<option value="Africa">Africa</option>
				<option value="America">America</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</div>
	);
};

export default Filter;
