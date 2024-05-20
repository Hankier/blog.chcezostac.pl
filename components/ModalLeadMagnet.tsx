"use client";

import Image from '@/components/Image';
import Link from '@/components/Link';
import { useState, useEffect, useRef } from 'react';

const ModalLeadMagnet = ({ title, subtitle, imageSrc, lm_list }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [input, setInput] = useState("");
    const [successMessage, setSuccessMessage] = useState<MembersSuccessResponse>();
    const [errorMessage, setErrorMessage] = useState("");
    const [active, setActive] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = input;
        const button = buttonRef.current;

        if (!email || !button) return;

        if (!active) {
        setActive(true);

        const res = await fetch("/api/addGetResponseSub", {
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          setErrorMessage('Some error message');
        } else {
          setSuccessMessage(data.message);
        }
        
        console.log(data);
        
        setActive(false);
      }
    }

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-cz-bg-dark bg-opacity-70 flex justify-center items-center">
            <div className="bg-white rounded-lg w-5/6 lg:w-1/2 p-px bg-gradient-to-r from-cz-blue to-cz-pink ">
                <div className="bg-cz-bg-dark p-2 lg:p-5 rounded-lg w-full">
                    <button onClick={handleClose} className="absolute top-4 right-4 text-2xl">
                        &times;
                    </button>
                    <div>
                    <h2 className="text-medium lg:text-xl text-center">
                    <span className="font-bold bg-clip-text text-xl lg:text-4xl text-transparent bg-gradient-to-r from-cz-blue to-cz-pink">{title}</span>
                    </h2>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2 lg:mt-4">
                        <div className="w-full lg:w-2/3 text-sm lg:text-base list-disc px-2">
                            <span dangerouslySetInnerHTML={{ __html: subtitle }} />
                        </div>
                    <div className="w-full lg:w-1/3 items-center">
                        <img src={imageSrc} alt="Modal Image" className="hidden lg:block object-cover w-1/2 mx-auto py-4" />
                        <div className="flex flex-col items-center">
                            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                                <input 
                                    className="text-white mx-4 font-bold text-sm lg:text-lg py-2 px-2 rounded bg-cz-bg-dark border border-gray-200 focus:border-cz-magenta focus:ring-cz-magenta" placeholder="Email"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    placeholder="jan@kowalski.pl"
                                    required
                                    type="email"
                                />
                                <button
                                    ref={buttonRef}
                                    className={`${active && "active"} mt-4 px-4 py-2 bg-cz-magenta hover:bg-cz-pink text-white rounded-md disabled:grayscale-[65%] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base`}
                                    disabled={!input}
                                    type="submit"
                                >
                                Odbieram!
                                </button>
                            </form>
                            <div className="mt-2 text-xs lg:text-sm text-gray-400 w-full text-center mx-auto">
                                Zapoznałem się z <Link href="https://panel.chcezostac.pl/podstrona/1/regulamin.html" className="underline hover:text-cz-purple">Regulaminem</Link> oraz <Link href="https://panel.chcezostac.pl/podstrona/2/politykaprywatnosci.html" className="underline hover:text-cz-purple">Polityką Prywatności</Link> i akceptuję ich postanowienia. Wypełniając formularz, wyrażasz zgodę na otrzymywanie wartościowych treści w newsletterze od "Chcę Zostać". W każdej chwili możesz się z niego wypisać.*
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLeadMagnet;