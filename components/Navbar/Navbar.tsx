import s from './Navbar.module.scss';

const Navbar: React.FC = () => {
	return (
		<nav className={s.navbar}>
			<div className={`container ${s.flex}`}>
				<h1 className={s.heading}>Where in the world?</h1>
				<p>Toggle Here</p>
			</div>
		</nav>
	);
};

export default Navbar;
