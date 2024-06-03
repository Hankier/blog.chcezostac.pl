'use client'

import { FormEvent, useRef, useState } from 'react'
import Link from './Link'

type MembersSuccessResponse = {
  // define the type here or import
}

const NewsletterForm = () => {
  const [input, setInput] = useState('')
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

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
        list: '8A',
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
    } else {
      setMessage(
        'Zostałeś/aś poprawnie zapisany/a na newsletter! Dziękujemy i do zobaczenia w Twojej skrzynce mailowej!'
      )
      setActive(false)
      setSubscribed(true)
    }
  }

  return (
    <div className="w-full pb-8 pt-4">
      <div className="w-full bg-gradient-to-r from-cz-blue to-cz-pink pt-px">
        <div className="mx-auto w-full bg-cz-bg-dark py-4 text-center">
          <div className="pb-4">
            <h2 className="bg-gradient-to-r from-cz-purple to-cz-pink bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
              Zapisz się na newsletter i bądź na bieżąco.
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="mx-4 rounded border border-gray-200 bg-cz-bg-dark px-2 py-2 text-lg font-bold text-white focus:border-cz-magenta focus:ring-cz-magenta"
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
              className={`${active && 'active'} rounded bg-gradient-to-r from-cz-blue to-cz-pink px-2 py-2 text-lg font-bold text-white hover:from-cz-purple hover:to-cz-pink disabled:cursor-not-allowed disabled:from-cz-blue disabled:to-cz-pink md:text-base`}
              disabled={!active || !input}
              type="submit"
            >
              {subscribed ? 'Dziękujemy!' : 'Zapisuję się!'}
            </button>
          </form>
          {error && (
            <div className="mx-auto mt-2 w-1/2 text-center text-sm text-red-600">{message}</div>
          )}
          {subscribed ? (
            <div className="mx-auto mt-2 w-1/2 text-center text-sm text-green-500">{message}</div>
          ) : (
            <div className="mx-auto mt-2 w-1/2 text-center text-sm text-gray-400">
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
              i akceptuję ich postanowienia. Wypełniając formularz, wyrażasz zgodę na otrzymywanie
              wartościowych treści w newsletterze od "Chcę Zostać". W każdej chwili możesz się z
              niego wypisać.*
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
