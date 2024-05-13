"use client";

import Image from '@/components/Image';
import { useState, useEffect } from 'react';

const ModalLeadMagnet = ({ title, subtitle, imageSrc, lm_list }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const isModalClosed = localStorage.getItem('modalClosed') === 'true';
        if (isModalClosed) return;
        console.log('Window Height:', window.innerHeight)

        const handleScroll = () => {
            const totalPageHeight = document.documentElement.scrollHeight;  // Total height of the document
            const triggerHeight = totalPageHeight / 4;                     // Trigger when scrolled half of the page
            console.log('Trigger Height:', triggerHeight)
            console.log('Scroll Y:', window.scrollY)
            if (window.scrollY > triggerHeight) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        //localStorage.setItem('modalClosed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-cz-bg-dark bg-opacity-70 flex justify-center items-center">
            <div className="bg-white rounded-lg w-4/5 lg:w-full max-w-2xl p-px bg-gradient-to-r from-cz-blue to-cz-pink ">
                <div className="bg-cz-bg-dark p-5 rounded-lg w-full max-w-2xl">
                    <button onClick={handleClose} className="absolute top-4 right-4 text-2xl">
                        &times;
                    </button>
                    <h2 className="text-medium lg:text-xl text-center"><span dangerouslySetInnerHTML={{ __html: title }} />
                    <br />
                    <br />
                    <span className="font-bold bg-clip-text text-lg lg:text-2xl text-transparent bg-gradient-to-r from-cz-blue to-cz-pink">{subtitle}</span></h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
                        <img src={imageSrc} alt="Modal Image" className="lg:w-1/2 w-1/2 object-cover" />
                        <div className="flex flex-col items-center w-1/2 lg:w-full">
                            <input type="text" placeholder="jan@kowalski.pl" className="text-white mx-4 font-bold text-lg py-2 px-2 rounded bg-cz-bg-dark border border-gray-200 focus:border-cz-magenta focus:ring-cz-magenta" />
                            <button className="mt-4 px-4 py-2 bg-cz-magenta text-white rounded-md">
                                Odbieram!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLeadMagnet;