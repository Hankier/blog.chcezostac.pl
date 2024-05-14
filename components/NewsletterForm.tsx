"use client";


import { FormEvent, useRef, useState } from "react";
import Link from './Link';

type MembersSuccessResponse = {
  // define the type here or import
};

const NewsletterForm = () => {
    const [input, setInput] = useState("");
    const [successMessage, setSuccessMessage] = useState<MembersSuccessResponse>();
    const [errorMessage, setErrorMessage] = useState("");
    const [active, setActive] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

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

    return (
    <div className="w-full pt-4 pb-8">
        <div className="w-full bg-gradient-to-r from-cz-blue to-cz-pink pt-px">
            <div className="w-full bg-cz-bg-dark text-center mx-auto py-4">
                <div className="pb-4">
                    <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cz-purple to-cz-pink">Zapisz się na newsletter i bądź na bieżąco.</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                        className="text-white mx-4 font-bold text-lg py-2 px-2 rounded bg-cz-bg-dark border border-gray-200 focus:border-cz-magenta focus:ring-cz-magenta" placeholder="Email"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="jan@kowalski.pl"
                        required
                        type="email"
                    />
                    <button
                        ref={buttonRef}
                        className={`${active && "active"} text-white font-bold text-lg py-2 px-2 rounded bg-gradient-to-r from-cz-blue to-cz-pink hover:from-cz-purple hover:to-cz-pink disabled:from-cz-blue disabled:to-cz-pink disabled:grayscale-[65%] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base`}
                        disabled={!input}
                        type="submit"
                    >
                    Zapisuję się!
                    </button>
                </form>
                <div className="mt-2 text-sm text-gray-400 w-1/2 text-center mx-auto">
                    Zapoznałem się z <Link href="https://panel.chcezostac.pl/podstrona/1/regulamin.html" className="underline hover:text-cz-purple">Regulaminem</Link> oraz <Link href="https://panel.chcezostac.pl/podstrona/2/politykaprywatnosci.html" className="underline hover:text-cz-purple">Polityką Prywatności</Link> i akceptuję ich postanowienia. Wypełniając formularz, wyrażasz zgodę na otrzymywanie wartościowych treści w newsletterze od "Chcę Zostać". W każdej chwili możesz się z niego wypisać.*
                </div>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
    </div>
    );
};

export default NewsletterForm;