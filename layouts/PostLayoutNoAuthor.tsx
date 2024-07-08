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
import ModalLeadMagnet from '@/components/ModalLeadMagnet'

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

export default function PostLayoutSimple({
  content,
  authorDetails,
  next,
  prev,
  children,
}: LayoutProps) {
  const {
    filePath,
    path,
    slug,
    date,
    title,
    tags,
    lm_title,
    lm_subtitle,
    lm_image,
    lm_list,
    oto_title,
    oto_button,
    oto_link,
  } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="mx-auto w-full max-w-7xl px-6 pt-4 lg:grid lg:w-4/5 lg:px-0 lg:pt-12">
          <div className="">
            <div className="text-base font-light text-gray-300">
              <Link href="https://chcezostac.pl" className="hover:font-normal hover:text-cz-pink">
                Strona Główna
              </Link>{' '}
              &gt;{' '}
              <Link href="/" className="hover:font-normal hover:text-cz-pink">
                Blog
              </Link>{' '}
              &gt;{' '}
              <Link href={`/${slug}`} className="hover:font-normal hover:text-cz-pink">
                {title}
              </Link>
            </div>
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
                  <ul className="justify-left flex flex-wrap gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                    <div>
                      <dt className="sr-only">Opublikowano</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(
                            siteMetadata.locale,
                            postDateTemplate
                          )}
                        </time>
                      </dd>
                    </div>
                  </ul>
                </dd>
              </dl>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="pt-4">
                    <h2 className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
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
              <div className="flex w-full justify-center pb-4 pt-4">
                <div className="prose max-w-6xl pb-8 text-lg dark:prose-invert">{children}</div>
              </div>
              <div className="w-full pb-8 pt-4">
                <div className="w-full bg-gradient-to-r from-cz-purple to-cz-pink py-px">
                  <div className="back flex h-full w-full columns-2 items-center bg-cz-bg-dark px-1 py-4">
                    <div className="w-full">
                      <span className="text-xl">Spodobał Ci się ten artykuł?</span>
                      <br />
                      <span className="text-xl font-bold">Podziel się ze znajomymi!</span>
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
                <div className="pb-4 pt-4 xl:pt-8">
                  <Link
                    href="/"
                    className="hover:text-ch-purple text-cz-pink dark:hover:text-cz-purple"
                    aria-label="Back to the blog"
                  >
                    &larr; Wróć do bloga
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
      <ModalLeadMagnet
        title={lm_title}
        subtitle={lm_subtitle}
        imageSrc={lm_image}
        lm_list={lm_list}
      />
    </SectionContainer>
  )
}
