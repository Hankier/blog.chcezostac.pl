import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-cz-magenta hover:text-cz-pink dark:hover:text-cz-pink"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
