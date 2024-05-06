
import Link from './Link'
import Image from './Image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const FollowOnSocial = () => {
  return (
    <div className="pt-96">
        <div className='"w-full text-center text-3xl'>
            Zaobserwuj nas
        </div>
        <div className="flex flex-row gap-x-12 justify-center pt-8">
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={10} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={10} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={10} />
        </div>
    </div>

  )
}
export default FollowOnSocial