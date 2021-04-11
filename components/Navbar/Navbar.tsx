import s from './Navbar.module.scss';

import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar: React.FC = () => {
	return (
		<nav className={s.navbar}>
			<div className={`container ${s.flex}`}>
				<h1 className={s.heading}>Where in the world?</h1>
				<ThemeToggle />
			</div>
		</nav>
	);
};

export default Navbar;
