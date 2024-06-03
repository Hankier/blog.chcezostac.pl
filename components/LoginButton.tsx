import Link from '@/components/Link'

const LoginButton = () => {
  return (
    <Link href="https://panel.chcezostac.pl/logowanie.html" className="text-white">
      <button className="text-md rounded-xl border border-white bg-cz-bg-dark px-4 py-2 font-normal text-white md:px-8 md:text-lg">
        Zaloguj się
      </button>
    </Link>
  )
}

export default LoginButton
