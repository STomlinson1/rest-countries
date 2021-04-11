export interface ApiData {
	alpha3Code: string;
	name: string;
	topLevelDomain: string[];
	capital: string;
	region: string;
	subregion: string;
	population: number;
	latlng: number[];
	timezones: string[];
	borders: string[];
	nativeName: string;
	currencies: string[];
	languages: {
		name: string;
	}[];
	flag: string;
}
