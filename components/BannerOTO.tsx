import Image from './Image'
import Link from './Link'

const BannerOTO = ({ text, buttonText, imgSrc, href }) => (
  <div className="w-full pb-8 pt-4">
    <div className="w-full bg-gradient-to-r from-cz-blue to-cz-pink py-px">
      <div className="back flex h-full w-full grid-cols-3 items-center gap-4 bg-cz-bg-dark py-4 ">
        <div className="mx-auto flex w-full justify-center">
          <Link href={href} aria-label={`Link to ${text}`}>
            <Image
              alt={text}
              src={imgSrc}
              className="object-cover object-center"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="py-auto col-span-2 mx-auto h-full w-full content-center text-left">
          <div className="space-x-4 text-lg font-bold lg:text-xl">
            <div className="text-white">{text}</div>
          </div>
          <div className="mt-8">
            <Link href={href} className="text-white">
              <button className="rounded bg-gradient-to-r from-cz-blue to-cz-pink px-4 py-4 text-lg font-bold text-white hover:from-cz-purple hover:to-cz-pink">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BannerOTO
