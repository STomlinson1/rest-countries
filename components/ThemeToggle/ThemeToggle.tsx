import s from './ThemeToggle.module.scss';

import { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
	const [ isDark, setIsDark ] = useState(false);

	useEffect(
		() => {
			if (isDark) {
				document.querySelector('body').classList.add('dark');
				return;
			}

			document.querySelector('body').classList.remove('dark');
		},
		[ isDark ]
	);

	return (
		<button className={s.themeToggle} onClick={(e) => setIsDark(!isDark)}>
			<img src="/images/sun.svg" alt="sun" />
			<img src="/images/moon.svg" alt="sun" />
			<div className={`${s.toggle} ${isDark ? s.left : s.right}`} />
		</button>
	);
};

export default ThemeToggle;
