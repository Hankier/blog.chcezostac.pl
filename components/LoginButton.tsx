import Link from '@/components/Link'

const LoginButton = () => {
    return (
        <Link href="https://panel.chcezostac.pl/logowanie.html" className="text-white">
            <button className="text-white font-normal text-md md:text-lg px-4 py-2 md:px-8 rounded-xl bg-cz-bg-dark border border-white">
                Zaloguj się
        </button>
        </Link>

    )
  }

export default LoginButton
