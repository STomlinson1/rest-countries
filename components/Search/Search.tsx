import { ChangeEvent, useState, Dispatch, SetStateAction } from 'react';

import s from './Search.module.scss';

import { ApiData } from '../../types';

interface SearchProps {
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className={s.search}>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	);
};

export default Search;
