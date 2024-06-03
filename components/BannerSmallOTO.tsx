import Link from './Link'

const BanerSmallOTO = ({ text, buttonText, href }) => (
  <div className="w-full pb-8 pt-4">
    <div className="w-full bg-gradient-to-r from-cz-blue to-cz-pink py-px">
      <div className="mx-auto w-full bg-cz-bg-dark py-4 text-center">
        <div className="space-x-4 text-xl font-bold">
          <div className="text-white">{text}</div>
        </div>
        <div className="mt-8">
          <Link href={href} className="text-white">
            <button className="rounded bg-gradient-to-r from-cz-blue to-cz-pink px-8 py-4 text-xl font-bold text-white hover:from-cz-purple hover:to-cz-pink">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default BanerSmallOTO
