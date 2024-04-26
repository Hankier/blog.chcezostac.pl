import Link from './Link'
import Image from './Image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="w-full text-white bg-stone-950 body-font text-xs">
      {/*
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
      <div className="bg-stone-950">
        <div className="columns-2 justify-center bg-slate-400 border-red-200 border-2">
          <div className="w-1/3 columns-2 justify-left">
            <div className="w-full bg-green-300">
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <Image
                  alt="ChcęZostać logo"
                  src="/static/images/logo.png"
                  className="object-cover object-center"
                  width={90}
                  height={63}
                />
              </Link>
            </div>
      */}
      <div className="container flex flex-col flex-wrap py-4 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex flex-grow w-2/5 mx-auto text-center md:mx-0 md:text-left">
                <a className="flex items-center justify-center font-small title-font md:justify-start">
                    <img src="https://2uvxrfrieeym.cdn.shift8web.com/wp-content/uploads/2019/11/chce-zostac-LOGO_8-1-1-300x221.png" className="w-auto h-20" />
                </a>
                <div className="w-auto pl-20">
                <p className="mt-2">Masz problem z zakupem?<br />Coś jest nie jasne?</p>
                <p className="mt-2 text-pink-600"><a className="cursor-pointer hover:text-violet-800" href="mailto:kontakt@chcezostac.pl">Napisz na kontakt@chcezostać.pl</a></p>
                <p className="mt-2">Na pewno pomożemy!</p>
                </div>
            </div>
            <div className="flex flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left w-3/5">
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 tracking-widest title-font">Chcę Zostać</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className=" cursor-pointer hover:text-gray-900">O nas</a>
                        </li>
                        <li className="mt-3">
                            <a className="cursor-pointer hover:text-gray-900">Kontakt</a>
                        </li>
                        <li className="mt-3">
                            <a className="cursor-pointer hover:text-gray-900">FAQ</a>
                        </li>
                        <li className="mt-3">
                            <a className="cursor-pointer hover:text-gray-900">Blog</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 className="mb-3 tracking-widest  title-font">Obserwuj nas
                    </h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="cursor-pointer hover:text-gray-900">Facebook</a>
                        </li>
                        <li className="mt-3">
                            <a className=" cursor-pointer hover:text-gray-900">Instagram</a>
                        </li>
                        <li className="mt-3">
                            <a className=" cursor-pointer hover:text-gray-900">YouTube</a>
                        </li>
                    </nav>
                </div>
                <div className="w-full px-4 lg:w-1/2 md:w-1/2">
                    <h2 className="mb-3 tracking-widest  title-font">Rodo</h2>
                    <nav className="mb-10 list-none">
                        <li className="mt-3">
                            <a className="cursor-pointer hover:text-gray-900">Polityka prywatności i Cookies</a>
                        </li>
                        <li className="mt-3">
                            <a className="cursor-pointer hover:text-gray-900">Regulamin</a>
                        </li>
                        <li className="mt-3">
                            <a className="cursor-pointer hover:text-gray-900">Informacje - ustawa o radiofonii i telewizji</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div className="">
            <div className="container px-5 py-4 mx-auto">
                <p className="text-sm text-gray-700 capitalize xl:text-center">Wszelkie Prawa Zastrzeżone przez Chcę Zostać.</p>
            </div>
        </div>
    </footer>
  )
}
