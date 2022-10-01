import { useForm } from '../hooks/useForm';

const CreateListing = () => {

    const { onInputChange, formState, setFormState } = useForm({
        type: 'sell',
        name: '',
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: '',
        description: '',
        offer: false,
        regularPrice: 0,
        discounted: 0,
        images: []
    });

    return (
        <main className='max-w-md px-2 mx-auto'>
            <h1 className='text-3xl text-center mt-6 font-bold'>Create listing</h1>
            <form>
                <div>
                    <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
                    <div className='flex gap-3'>
                        <button
                            type='button'
                            onClick={() => setFormState({ ...formState, type: 'sell' })}
                            className={`transition w-full py-2 rounded shadow ${formState.type === 'sell' ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        >
                            Sell
                        </button>
                        <button
                            type='button'
                            onClick={() => setFormState({ ...formState, type: 'rent' })}
                            className={`transition w-full py-2 rounded shadow ${formState.type === 'rent' ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        >
                            Rent
                        </button>
                    </div>
                </div>

                <div>
                    <p className='text-lg mt-6 font-semibold'>Name</p>
                    <input
                        type="text"
                        name='name'
                        value={formState.name}
                        onChange={onInputChange}
                        placeholder='Name'
                        className='w-full border rounded border-gray-300'
                    />
                </div>

                <div className='flex gap-3'>
                    <div>
                        <p className='text-lg mt-6 font-semibold'>Beds</p>
                        <input
                            type="number"
                            name='bedrooms'
                            onChange={onInputChange}
                            value={formState.bedrooms}
                            className='w-full border rounded border-gray-300'
                        />
                    </div>
                    <div>
                        <p className='text-lg mt-6 font-semibold'>Baths</p>
                        <input
                            type="number"
                            name='bathrooms'
                            onChange={onInputChange}
                            value={formState.bathrooms}
                            className='w-full border rounded border-gray-300'
                        />
                    </div>
                </div>

                <div>
                    <p className='text-lg mt-6 font-semibold'>Parking spot</p>
                    <div className='flex gap-3'>
                        <button
                            type='button'
                            onClick={() => setFormState({ ...formState, parking: true })}
                            className={`transition w-full py-2 rounded shadow ${formState.parking === true ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        >
                            Yes
                        </button>
                        <button
                            type='button'
                            onClick={() => setFormState({ ...formState, parking: false })}
                            className={`transition w-full py-2 rounded shadow ${formState.parking === false ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        >
                            No
                        </button>
                    </div>
                </div>

                <div>
                    <p className='text-lg mt-6 font-semibold'>Furnished</p>
                    <div className='flex gap-3'>
                        <button
                            type='button'
                            onClick={() => setFormState({ ...formState, furnished: true })}
                            className={`transition w-full py-2 rounded shadow ${formState.furnished === true ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        >
                            Yes
                        </button>
                        <button
                            type='button'
                            onClick={() => setFormState({ ...formState, furnished: false })}
                            className={`transition w-full py-2 rounded shadow ${formState.furnished === false ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        >
                            No
                        </button>
                    </div>
                </div>

                <div>
                    <p className='text-lg mt-6 font-semibold'>Address</p>
                    <input
                        type="text"
                        name='address'
                        onChange={onInputChange}
                        value={formState.address}
                        placeholder='Address'
                        className='w-full border rounded border-gray-300'
                    />
                </div>

                <div>
                    <p className='text-lg mt-6 font-semibold'>Description</p>
                    <input
                        type="text"
                        name='description'
                        onChange={onInputChange}
                        value={formState.description}
                        placeholder='Description'
                        className='w-full border rounded border-gray-300'
                    />
                </div>

                <div>
                    <p className='text-lg mt-6 font-semibold'>Offer</p>
                    <div className='flex gap-3'>
                        <button
                            type='button'
                            onClick={() => setFormState({ ...formState, offer: true })}
                            className={`transition w-full py-2 rounded shadow ${formState.offer === true ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        >
                            Yes
                        </button>
                        <button
                            type='button'
                            onClick={() => setFormState({ ...formState, offer: false })}
                            className={`transition w-full py-2 rounded shadow ${formState.offer === false ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        >
                            No
                        </button>
                    </div>
                </div>

                {
                    formState.type === 'rent'
                        ? (
                            <div className='flex gap-3'>
                                <div className=''>
                                    <p className='text-lg mt-6 font-semibold'>Regular price</p>
                                    <div className='flex gap-3 items-center'>
                                        <input
                                            type="number"
                                            name='regularPrice'
                                            onChange={onInputChange}
                                            value={formState.regularPrice}
                                            className='w-full border rounded border-gray-300'
                                        />
                                        <h3 className='whitespace-nowrap'>$/ Month</h3>
                                    </div>
                                </div>
                            </div>
                        ) : null
                }

                <div>
                    <p className='text-lg mt-6 font-semibold'>Discounted price</p>
                    <input
                        type="number"
                        name='discounted'
                        onChange={onInputChange}
                        value={formState.discounted}
                        className='w-full border rounded border-gray-300'
                    />
                </div>

                <div>
                    <p className='text-lg mt-6 font-semibold'>Images</p>
                    <h6 className='text-gray-500 text-sm'>The first image will be the cover (max. 6)</h6>
                    <input
                        multiple
                        required
                        type="file"
                        name='images'
                        onChange={onInputChange}
                        accept='.jpg, .png, .jpeg'
                        className='w-full bg-white border rounded border-gray-300'
                    />
                </div>

                <button className='mb-6 font-medium mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 uppercase text-xl' type='submit'>Create listing</button>
            </form>
        </main>
    );
};

export default CreateListing;