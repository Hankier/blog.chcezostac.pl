'use client'
import React, { FormEvent } from 'react'
import Link from './Link'
import Image from './Image'
import { useState, useEffect, useRef } from 'react'

const ModalLeadMagnet = ({ title, subtitle, imageSrc, lm_list }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [input, setInput] = useState('')
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const isModalClosed = localStorage.getItem('modalClosed') === 'true'
    if (isModalClosed) return

    const handleScroll = () => {
      const totalPageHeight = document.documentElement.scrollHeight // Total height of the document
      const triggerHeight = totalPageHeight / 4 // Trigger when scrolled half of the page
      if (window.scrollY > triggerHeight) {
        setIsVisible(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('modalClosed', 'true')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = input
    const button = buttonRef.current

    if (!email || !button) return

    if (!active) {
      setActive(true)
    }

    const res = await fetch('/api/addGetResponseSub', {
      body: JSON.stringify({
        email: email,
        list: lm_list,
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (res.status === 409) {
      setError(true)
      setMessage(
        'Ten adres email jest już zapisany na newsletter. Jeśli nie otrzymujesz od nas wiadomości, sprawdź folder SPAM lub skontaktuj się z nami.'
      )
    } else if (!res.status.toString().startsWith('2')) {
      setError(true)
      setMessage('Coś poszło nie tak. Odśwież stronę i spróbuj ponownie później.')
    } else if (res.status.toString().startsWith('2')) {
      setMessage(
        'Zostałeś/aś poprawnie zapisany/a na newsletter! Dziękujemy i do zobaczenia w Twojej skrzynce mailowej!'
      )
      setActive(false)
      setSubscribed(true)
    } else {
      setError(true)
      setMessage('Coś poszło nie tak. Odśwież stronę i spróbuj ponownie później.')
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cz-bg-dark bg-opacity-70">
      <div className="w-5/6 rounded-lg bg-white bg-gradient-to-r from-cz-blue to-cz-pink p-px lg:w-1/2 ">
        <div className="w-full rounded-lg bg-cz-bg-dark p-2 lg:p-5">
          <button onClick={handleClose} className="absolute right-12 top-12 text-5xl">
            &times;
          </button>
          <div>
            <h2 className="text-medium text-center lg:text-xl">
              <span className="bg-gradient-to-r from-cz-blue to-cz-pink bg-clip-text text-xl font-bold text-transparent lg:text-4xl">
                {title}
              </span>
            </h2>
          </div>
          <div className="mt-2 flex flex-col items-center justify-center gap-4 md:flex-row lg:mt-4">
            <div className="w-full list-disc px-2 text-sm lg:w-2/3 lg:text-base">
              <span dangerouslySetInnerHTML={{ __html: subtitle }} />
            </div>
            <div className="w-full items-center lg:w-1/3">
              <img alt="Modal Image" />
              <Image
                alt="Modal Image"
                src={imageSrc}
                className="mx-auto hidden w-3/4 object-cover pb-2 lg:block"
                width={256}
                height={256}
              />
              <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                  <input
                    className="mx-4 rounded border border-gray-200 bg-cz-bg-dark px-2 py-2 text-sm font-bold text-white focus:border-cz-magenta focus:ring-cz-magenta"
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value)
                      setActive(true)
                    }}
                    placeholder="jan@kowalski.pl"
                    required
                    type="email"
                  />
                  <button
                    ref={buttonRef}
                    className={`${active && 'active'} mt-4 rounded-md bg-cz-magenta px-4 py-2 text-sm text-white hover:bg-cz-pink disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale-[65%] md:text-base`}
                    disabled={!input || !active || error}
                    type="submit"
                  >
                    {error ? 'Spróbuj później.' : subscribed ? 'Dziękujemy!' : 'Zapisuję się!'}
                  </button>
                </form>
                {error && (
                  <div className="mx-auto mt-2 w-full text-center text-sm text-red-600">
                    {message}
                  </div>
                )}
                {subscribed ? (
                  <div className="mx-auto mt-2 w-full text-center text-sm text-green-500">
                    {message}
                  </div>
                ) : (
                  <div className="mx-auto mt-2 w-full text-center text-sm text-gray-400">
                    Zapoznałem się z{' '}
                    <Link
                      href="https://panel.chcezostac.pl/podstrona/1/regulamin.html"
                      className="underline hover:text-cz-purple"
                    >
                      Regulaminem
                    </Link>{' '}
                    oraz{' '}
                    <Link
                      href="https://panel.chcezostac.pl/podstrona/2/politykaprywatnosci.html"
                      className="underline hover:text-cz-purple"
                    >
                      Polityką Prywatności
                    </Link>{' '}
                    i akceptuję ich postanowienia. Wypełniając formularz, wyrażasz zgodę na
                    otrzymywanie wartościowych treści w newsletterze od "Chcę Zostać". W każdej
                    chwili możesz się z niego wypisać.*
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalLeadMagnet
