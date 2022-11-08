import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import InteriorDesign from './InteriorDesign';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InteriorDesign/>
            <Services/>
            <Testimonials/>
            <ContactForm/>
        </div>
    );
};

export default Home;