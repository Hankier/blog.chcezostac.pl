import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
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
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayoutNoAuthor({ content, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags, lm_title, lm_subtitle, lm_image, lm_list, oto_title, oto_button, oto_link } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="lg:grid lg:grid-cols-8 lg:gap-0 w-full lg:w-4/5 mx-auto px-6 lg:px-0 pt-4 lg:pt-12">
          <div className="lg:col-span-5">
            <div className="text-gray-300 text-base font-light">
            <Link href='https://chcezostac.pl' className="hover:text-cz-pink hover:font-normal">Strona Główna</Link> &gt; <Link href='/' className="hover:text-cz-pink hover:font-normal">Blog</Link> &gt; <Link href={`/${slug}`} className="hover:text-cz-pink hover:font-normal">{title}</Link>
            </div>
            <header className="pt-6 xl:pb-6">
              <div className="space-y-1 text-left">
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
              </div>
            </header>
            <div className="grid-rows-[auto_1fr]">
              <div className="divide-gray-200 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 ">
                <dl className="whitespace-nowrap font-medium leading-5">
                    <div>
                        <dt className="sr-only">Opublikowano</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                        </dd>
                    </div>
                </dl>
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
                <div className="prose max-w-none pb-8 dark:prose-invert text-lg">{children}</div>
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
                <BannerSmallOTO text={oto_title} buttonText={oto_button} href={oto_link} />
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
      <ModalLeadMagnet title={lm_title} subtitle={lm_subtitle} imageSrc={lm_image} lm_list={lm_list} />
    </SectionContainer>
  )
}
