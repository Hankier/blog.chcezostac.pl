import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import BannerSmallOTO from '@/components/BannerSmallOTO'
import FollowOnSocial from '@/components/FollowOnSocial'
import PostInfoCard from '@/components/PostInfoCard'
import ModalLeadMagnet from '@/components/ModalLeadMagnet'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="lg:grid lg:grid-cols-8 lg:gap-0 w-full lg:w-4/5 mx-auto px-6 lg:px-0 pt-4 lg:pt-12">
          <div className="lg:col-span-5">
            <header className="pt-6 xl:pb-6">
              <div className="space-y-1 text-left">
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
              </div>
            </header>
            <div className="grid-rows-[auto_1fr]">
              <dl className="pt-6 xl:pt-11">
                <dt className="sr-only">Autor</dt>
                <dd>
                  <ul className="flex flex-wrap justify-left gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                    {authorDetails.map((author) => (
                      <li className="flex items-center space-x-2" key={author.name}>
                        {author.avatar && (
                          <Image
                            src={author.avatar}
                            width={38}
                            height={38}
                            alt="avatar"
                            className="h-10 w-10 rounded-full"
                          />
                        )}
                        <dl className="whitespace-nowrap font-medium leading-5">
                          <dt className="sr-only">Imię i nazwisko</dt>
                          <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
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
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="pt-4">
                    <h2 className="text-xs uppercase tracking-wide text-left text-gray-500 dark:text-gray-400">
                      Tagi
                    </h2>
                    <div className="text-left">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div className="prose max-w-none pb-8 dark:prose-invert">{children}</div>
              </div>
              <div className="w-full pt-4 pb-8">
              <div className="w-full bg-gradient-to-r from-cz-purple to-cz-pink py-px">
                <div className="flex h-full w-full columns-2 bg-cz-bg-dark back flex items-center py-4 px-1">
                  <div className="w-full">
                    <span className="text-xl">Spodobał Ci się ten artykuł?</span>
                    <br />
                    <span className="font-bold text-xl">Podziel się ze znajomymi!</span>
                  </div>
                  <div className="w-full text-right">
                    <div className="flex justify-end space-x-4">
                      <SocialIcon kind="facebook" href={siteMetadata.facebook} size={8} />
                      <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={8} />
                      <SocialIcon kind="twitter" href={siteMetadata.twitter} size={8} />
                      <SocialIcon kind="threads" href={siteMetadata.threads} size={8} />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="pt-4 pb-2 md:pb-8 md:pr-8">
                {authorDetails.map((author) => (
                  <li className="flex items-start md:items-center space-x-2" key={author.name}>
                    {author.avatar && (
                      <Image
                        src={author.avatar}
                        width={468}
                        height={468}
                        alt="avatar"
                        className="rounded-full h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28"
                      />
                    )}
                    <dl className="font-medium leading-3 md:leading-5">
                      <dt className="sr-only">Imię i nazwisko</dt>
                      <dd className="text-normal lg:text-lg text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <div className="mt-2 md:mt-4">
                          <dt className="sr-only">Informacja o autorze</dt>
                          <dd className="text-sm lg:text-normal font-normal leading-6 dark:text-gray-200">
                            {author.description}
                          </dd>
                        </div>
                    </dl>
                  </li>
                ))}
              </div>
              <footer>
                <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                  {(next || prev) && (
                    <div className="flex justify-between py-4">
                      {prev && prev.path && (
                        <div>
                          <h2 className="uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            Poprzedni artykuł 
                          </h2>
                          <div className="text-cz-pink hover:text-cz-purple">
                            <Link href={`/${prev.path}`}>{prev.title}</Link>
                          </div>
                        </div>
                      )}
                      {next && next.path && (
                        <div>
                          <h2 className="uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            Następny artykuł
                          </h2>
                          <div className="text-cz-pink hover:text-cz-purple">
                            <Link href={`/${next.path}`}>{next.title}</Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="w-full">
                <BannerSmallOTO text="Chcesz lepiej zrozumieć potrzeby swojego kota?" buttonText="Dołącz do naszego kursu!" href="https://twojkot.chcezostac.pl/komunikacja-blog" />
                </div>
                <div className="pt-4 xl:pt-8 pb-4">
                  <Link
                    href="/"
                    className="text-cz-pink hover:text-ch-purple dark:hover:text-cz-purple"
                    aria-label="Back to the blog"
                  >
                    &larr; Wróć do bloga
                  </Link>
                </div>
              </footer>
            </div>
          </div>
          <div className="lg:col-span-3 pt-8 pb-8 hidden lg:block">
            <FollowOnSocial />
            <div className="w-full pt-24 pb-8">
              <div className="w-full pt-4 pb-8 text-3xl text-center">
                  Ostatnie
              </div>
              <div className="w-full pt-4 pb-8">
              </div>
            </div>
          </div>
        </div>
      </article>
      <ModalLeadMagnet />
    </SectionContainer>
  )
}
