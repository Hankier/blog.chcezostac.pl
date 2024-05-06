
import Image from './Image'
import Link from './Link'

const BanerSmallOTO = ({ text, buttonText, href }) => (
    <div className="w-full pt-4 pb-8">
        <div className="w-full bg-gradient-to-r from-cz-blue to-cz-pink py-px">
            <div className="w-full bg-cz-bg-dark text-center mx-auto py-4">
                <div className="space-x-4 font-bold text-xl">
                    <div className="text-white">{text}</div>    
                </div>
                <div className="mt-8">
                    <Link href={href} className="text-white">
                        <button className="text-white font-bold text-xl py-4 px-8 rounded bg-gradient-to-r from-cz-blue to-cz-pink hover:from-cz-purple hover:to-cz-pink">
                            {buttonText}
                        </button>
                    </Link>    
                </div> 
            </div>
        </div>
    </div>
)

export default BanerSmallOTO
