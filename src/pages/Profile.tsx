import { useForm } from '../hooks/useForm';
import { useAuthStore } from '../hooks/useAuthStore';
const Profile = () => {
    const { startLogout } = useAuthStore();
    const { email, name, onInputChange } = useForm({
        name: '',
        email: ''
    });

    const handleSignOut = () => {
        startLogout();
    };

    return (
        <section
            className='max-w-6xl mx-auto flex flex-col justify-center items-center'
        >
            <h1 className='text-3xl text-center mt-6 font-bold'>
                Mi perfil
            </h1>
            <div className='w-full md:w-[50%] mt-6 px-3'>
                <form>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        disabled
                        onChange={onInputChange}
                        className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        disabled
                        onChange={onInputChange}
                        className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'
                    />
                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
                        <p className='flex items-center'>
                            Do you want to change your name ?
                            <span
                                className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'
                            >Edit</span>
                        </p>
                        <p
                            onClick={handleSignOut}
                            className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'
                        >
                            Sign Out
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Profile;