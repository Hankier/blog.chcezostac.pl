import Image from './Image'
import Link from './Link'

const BannerOTO = ({ text, buttonText, imgSrc, href }) => (
    <div className="w-full pt-4 pb-8">
        <div class="w-full bg-gradient-to-r from-cz-blue to-cz-pink py-px">
        <div class="h-full w-full grid grid-cols-3 gap-4 bg-cz-bg-dark back flex items-center py-4 ">
            <div class="w-full mx-auto flex justify-center">
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
            <div className="w-full h-full col-span-2 content-center mx-auto py-auto text-left">
                <div className="space-x-4 font-bold text-xl">
                    <div className="text-white">{text}</div>    
                </div>
                <div className="mt-8">
                    <Link href={href} className="text-white">
                        <button className="text-white font-bold text-lg py-4 px-4 rounded bg-gradient-to-r from-cz-blue to-cz-pink hover:from-cz-purple hover:to-cz-pink">
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
