import { useLocation, useNavigate } from 'react-router-dom';
import { useChecking } from '../hooks/useChecking';


const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const status = useChecking();

    const pathMatch = (route: string) => {
        return route === location.pathname;
    };

    return (
        <header className='header sticky z-40 top-0 bg-white border-b shadow-sm'>
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
                        {
                            status === 'authenticated'
                                ? (
                                    <li className={`cursor-pointer py-3 text-sm font-semibold
                            text-gray-400 border-b-[3px] 
                            border-b-transparent ${pathMatch('/profile') && "text-black border-b-red-500"}`}
                                        onClick={() => navigate('/profile')}
                                    >
                                        Profile
                                    </li>
                                )
                                : (status === "checking"
                                    ? (<li>cargando...</li>)
                                    : (
                                        <li className={`cursor-pointer py-3 text-sm font-semibold
                                text-gray-400 border-b-[3px] 
                                border-b-transparent ${pathMatch('/auth/sign-in') && "text-black border-b-red-500"}`}
                                            onClick={() => navigate('/auth/sign-in')}
                                        >
                                            Sign in
                                        </li>
                                    ))
                        }
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;