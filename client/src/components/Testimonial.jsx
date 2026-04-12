import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {

    const testimonials = [
        {
            name: "Emma Rodriguez",
            location: "Barcelona, Spain",
            image: assets.testimonial_image_1,
            testimonial: "StayVenture exceeded my expectations in every way. The booking process was seamless, and the customer service was outstanding. I felt valued and cared for throughout my stay. Highly recommended!"
        },
        {
            name: "John Smith",
            location: "New York, USA",
            image: assets.testimonial_image_2,
            testimonial: "I had an amazing experience with StayVenture. The accommodations were top-notch, and the staff went above and beyond to ensure my comfort. I will definitely be using StayVenture for all my future travel needs."
        },
        {
            name: "Eva Johnson",
            location: "Sydney, Australia",
            image: assets.testimonial_image_1,
            testimonial: "StayVenture made my vacation unforgettable. The attention to detail and personalized service made me feel like a VIP. I can't wait to book my next trip with StayVenture!"
        },


    ];

    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">

            <Title title='What Our Customers Say' subTitle='Discover why discerning travelers choose StayVenture for their luxury accomodations around the world' />


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="Star" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
