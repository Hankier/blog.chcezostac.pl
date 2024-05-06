import Link from 'next/link';
import Image from 'next/image';

const PostInfoCard = ({ title, description, authorName, authorImg, date, href }) => (
    <div className="w-full flex items-center mx-auto px-8">
        <div className="font-bold text-2xl leading-8 tracking-tight">
            {title}
        </div>
        <div className="grid-rows-[auto_1fr]">
            <dl className="pt-6 xl:pt-11">
            <dt className="sr-only">Autor</dt>
            <dd>
                <ul className="flex flex-wrap justify-left gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                    <li className="flex items-center space-x-2" key={authorName}>
                    <Image
                    src={authorImg}
                    width={38}
                    height={38}
                    alt="avatar"
                    className="h-10 w-10 rounded-full"
                    />
                    <dl className="whitespace-nowrap font-medium leading-5">
                        <dt className="sr-only">Imię i nazwisko</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{authorName}</dd>
                        <div>
                            <dt className="sr-only">Opublikowano</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>
                                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                            </time>
                            </dd>
                        </div>
                    </dl>
                    </li>
                ))}
                </ul>
            </dd>
            </dl>
        </div>
        <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
        >
            Czytaj więcej &rarr;
        </Link>
    </div>
    )
export default PostInfoCard