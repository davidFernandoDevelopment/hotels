import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const pathMatch = (route: string) => {
        return route === location.pathname;
    };

    return (
        <header className='header sticky z-50 top-0 bg-white border-b shadow-sm'>
            <div className="header__container mx-auto max-w-6xl px-3 flex justify-between items-center">
                <div className="header__logo">
                    <img className='h-5 cursor-pointer' src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Realtor Logo" />
                </div>
                <nav className='header__nav'>
                    <ul className="header__list flex items-center space-x-10">
                        <li className={`cursor-pointer py-3 text-sm font-semibold
                         text-gray-400 border-b-[3px] 
                         border-b-transparent ${pathMatch('/') && "text-black border-b-red-500"}`}
                            onClick={() => navigate('/')}
                        >
                            Home
                        </li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold
                         text-gray-400 border-b-[3px] 
                         border-b-transparent ${pathMatch('/offers') && "text-black border-b-red-500"}`}
                            onClick={() => navigate('/offers')}
                        >
                            Offers
                        </li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold
                         text-gray-400 border-b-[3px] 
                         border-b-transparent ${pathMatch('/sign-in') && "text-black border-b-red-500"}`}
                            onClick={() => navigate('/sign-in')}
                        >
                            Sign in
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;