import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CarCard from '../components/CarCard';
import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Cars = () => {

    // Getting search params from URI
    const [searchParams] = useSearchParams();
    const pickupLocation = searchParams.get('pickupLocation');
    const pickupDate = searchParams.get('pickupDate')
    const returnDate = searchParams.get('returnDate')

    const { cars, axios } = useAppContext();

    const [input, setInput] = useState('');

    const isSearchData = pickupLocation && pickupDate && returnDate;

    const [filteredCar, setFilteredCars] = useState([])

    const applyFiltered = () => {
        const source = isSearchData ? filteredCar : cars;

        if (input.trim() === '') {
            setFilteredCars(source);
            return;
        }

        const keywords = input.toLowerCase().split(' ').filter(Boolean);

        const filtered = source.filter(car => {
            const searchableText = `
            ${car.brand} 
            ${car.model} 
            ${car.category} 
            ${car.transmission} 
            ${car.fuel_type}
            ${car.seating_capacity}
        `.toLowerCase();

            // check every keyword exists
            return keywords.every(word => searchableText.includes(word));
        });

        setFilteredCars(filtered);
    };


    // Searching function 
    const searchCarAvailability = async () => {
        const { data } = await axios.post('/api/bookings/check-availability', { location: pickupLocation, pickupDate, returnDate })

        if (data.success) {
            setFilteredCars(data.availableCars)
            if (data.availableCars.length === 0) {
                toast("No car available")
            }
            return null;
        }
    }

    useEffect(() => {
        if (isSearchData) {
            searchCarAvailability();
        } else {
            setFilteredCars(cars); // 
        }
    }, [cars])

    useEffect(() => {
        if (!isSearchData) {
            applyFiltered();
        }
    }, [input, cars]);

    return (
        <div>
            <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
                <Title title='Available cars' subTitle='Browse our selection of premium vehicles available for your next adventure' />

                <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow'>
                    <img src={assets.search_icon} alt="Search" className='w-4.5 h-4.5 mr-2' />

                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        placeholder='Search by make, model or features'
                        className='w-full h-full outline-none text-gray-500'
                    />

                    <img src={assets.filter_icon} alt="Filter" className='w-4.5 h-4.5 ml-2' />
                </div>
            </div>

            <div className='px-6 md:px-16 lg:px-24 xl:px-32 my-10'>
                <p className='text-gray-500 xl:px-20 max-w-7xl mx-auto'>Showing {filteredCar.length} Cars</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'>

                    {filteredCar.map((car, index) => (
                        <div className='' key={index}>
                            <CarCard car={car} />
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Cars
