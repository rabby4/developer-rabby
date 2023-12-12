import { Link } from 'react-router-dom';
import logo from '../../assets/developer-rabby.png'

const Header = () => {
    const navLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolios'>Portfolios</a></li>
        <li><a href='#contact'>Contact</a></li>
    </>
    return (
        <>
            <div className="navbar shadow-md h-24">
                <div className="container max-w-7xl mx-auto justify-between items-center md:px-8 lg:px-0">
                    <div className="flex justify-between w-full md:w-auto">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>

                        <div className=''>
                            <Link to={'/'}>
                                <img width={'120px'} src={logo} alt="" className='' />
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className=" menu-horizontal px-1 lg:text-lg md:text-base font-medium gap-8">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <a href='../../../assets/personal-branding.pdf' download className="btn text-base bg-brown-900 hover:bg-brown-500 text-white">Download Resume</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;