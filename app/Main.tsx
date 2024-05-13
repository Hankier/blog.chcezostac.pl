import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import NewsletterForm from '@/components/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 w-full lg:w-4/5 mx-auto px-6 lg:px-0 pt-4 lg:pt-12">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Najnowsze wpisy 
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="w-full bg-gradient-to-r from-cz-blue to-cz-pink pt-px">
          <ul className="w-full bg-cz-bg-dark">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags, images } = post
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 lg:grid lg:grid-cols-4 lg:items-start xl:space-y-0">
                      <div className="hidden lg:block px-4">
                        {images.map((image) => (
                          <Image src={image} alt={title} width={256} height={128} />
                        ))}
                      </div>
                      <div className="space-y-5 lg:col-span-3">
                        <div className="space-y-6">
                          <dl>
                            <dt className="sr-only">Opublikowano</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </dd>
                          </dl>
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap my-2">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/${slug}`}
                            className=""
                          >
                            {summary}
                          </Link>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/${slug}`}
                            className="text-cz-magenta hover:text-cz-pink dark:hover:text-cz-pink"
                            aria-label={`Read more: "${title}"`}
                          >
                            Czytaj więcej &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/posts"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            Wszystkie wpisy &rarr;
          </Link>
        </div>
      )}
      <div className="divide-y divide-gray-200 dark:divide-gray-700 w-full lg:w-4/5 mx-auto px-6 lg:px-0 pt-4 lg:pt-12">
        <NewsletterForm />
      </div>
    </>
  )
}
