import Link from '@/components/Link'

const LoginButton = () => {
    return (
        <Link href="https://panel.chcezostac.pl/logowanie.html" className="text-white">
            <button className="text-white font-normal text-lg py-2 px-8 rounded-xl bg-cz-bg-dark border border-white">
                Zaloguj się
        </button>
        </Link>

    )
  }

export default LoginButton
