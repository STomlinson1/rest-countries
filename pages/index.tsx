import { Fragment, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import CountryService from '../services/restCountry';

import { Search, Filter } from '../components';

import { ApiData } from '../types';

export const getStaticProps: GetStaticProps = async () => {
	const data = await CountryService.getAll();

	return {
		props: {
			data
		}
	};
};

interface HomeProps {
	data: ApiData[];
}

const filterList = (term: string, filter: string, data: ApiData[]): ApiData[] => {
	const filterByTerm = data.filter((country) =>
		country.name.toLowerCase().includes(term.toLowerCase())
	);

	const filterByRegion = filterByTerm.filter((country) =>
		country.region.toLowerCase().includes(filter.toLowerCase())
	);

	return filterByRegion;
};

const Home: React.FC<HomeProps> = ({ data }) => {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ regionFilter, setRegionFilter ] = useState('');

	const countries = filterList(searchTerm, regionFilter, data);

	console.log(countries);

	const handlePagination = () => {};

	return (
		<Fragment>
			<Head>
				<title>Rest Countries</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Filter regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
		</Fragment>
	);
};

export default Home;
