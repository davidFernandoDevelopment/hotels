import SpinnerImage from '../assets/images/spinner.svg';

const Spinner = () => {
    return (
        <div className='bg-black bg-opacity-50 flex items-center justify-center fixed inset-0 z-50'>
            <div>
                <img className='h-24' src={SpinnerImage} alt="Loading ..." />
            </div>
        </div>
    );
};

export default Spinner;