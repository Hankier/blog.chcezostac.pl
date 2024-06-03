import Link from './Link'
import Image from './Image'
import siteMetadata from '@/data/siteMetadata'

const Footer = () => {
  return (
    <footer className="body-font text-s w-full bg-stone-950 text-white">
      <div className="container w-full lg:mx-auto lg:w-4/5">
        <div className="md:flex-no-wrap container mx-auto flex flex-col flex-wrap py-4 md:flex-row md:items-center lg:items-start">
          <div className="mx-auto flex w-full flex-grow text-center md:mx-0 lg:w-2/5 lg:text-left">
            <Link
              href="https://chcezostac.pl/"
              className="font-small title-font flex w-full items-center justify-center md:justify-start lg:w-1/3"
            >
              <img
                src="https://2uvxrfrieeym.cdn.shift8web.com/wp-content/uploads/2019/11/chce-zostac-LOGO_8-1-1-300x221.png"
                className="h-20 w-auto"
              />
            </Link>
            <div className="w-full pl-20 lg:w-2/3">
              <p className="mt-2">
                Masz problem z zakupem?
                <br />
                Coś jest nie jasne?
              </p>
              <p className="mt-2 text-cz-pink">
                <Link
                  className="cursor-pointer hover:text-cz-purple"
                  href="mailto:kontakt@chcezostac.pl"
                >
                  Napisz na kontakt@chcezostać.pl
                </Link>
              </p>
              <p className="mt-2">Na pewno pomożemy!</p>
            </div>
          </div>
          <div className="-mb-10 mt-10 flex w-full flex-grow text-center md:mt-0 md:pl-20 md:text-left lg:w-3/5">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 tracking-widest">Chcę Zostać</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link
                    href="https://chcezostac.pl/onas/"
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    O nas
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="https://chcezostac.pl/kontakt/"
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    Kontakt
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="https://chcezostac.pl/faq/"
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="https://chcezostac.pl/blog/"
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    Blog
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3  tracking-widest">Obserwuj nas</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link
                    href={siteMetadata.facebook || '#'}
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href={siteMetadata.instagram || '#'}
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href={siteMetadata.youtube || '#'}
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    YouTube
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <h2 className="title-font mb-3  tracking-widest">Rodo</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link
                    href="https://panel.chcezostac.pl/podstrona/2/politykaprywatnosci.html"
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    Polityka prywatności i Cookies
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="https://panel.chcezostac.pl/podstrona/1/regulamin.html"
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    Regulamin
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="https://2uvxrfrieeym.cdn.shift8web.com/wp-content/uploads/2023/08/Progresion-2023-08-21-obowiazek-informacyjn-y-chce.pdf"
                    className="cursor-pointer hover:text-cz-pink"
                  >
                    Informacje - ustawa o radiofonii i telewizji
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto px-5 py-4">
            <p className="text-sm capitalize text-gray-500 xl:text-center">
              {`© ${new Date().getFullYear()}`} Wszelkie Prawa Zastrzeżone przez Chcę Zostać.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
