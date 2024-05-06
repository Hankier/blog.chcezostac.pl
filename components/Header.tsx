import siteMetadata from '@/data/siteMetadata'
import Image from './Image'
import Link from './Link'
import SearchButton from './SearchButton'
import LoginButton from './LoginButton'

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-4/5 mx-auto pt-8 flex items-center justify-between">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Image
                  alt="ChcęZostać logo"
                  src="/static/images/logo.png"
                  className="object-cover object-center"
                  width={114}
                  height={84}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <LoginButton />
          <SearchButton />
        </div>
      </div>
    </header>
  )
}

export default Header
