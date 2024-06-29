import { AboutQueryResult } from '@/sanity/sanity-types'

export default function Socials({
  socials
}: {
  socials: AboutQueryResult['socials']
}) {
  console.log('socials are', socials)

  return (
    <>
      <div>
        {socials?.map(social => {
          const socialLogos = {
            Facebook: '/img/facebook-logo.svg',
            Instagram: '/img/instagram-logo.svg',
            X: '/img/x-logo.svg',
            SoundCloud: '/img/soundcloud-logo.svg'
          }

          const socialLinks = {
            SoundCloud: 'https://soundcloud.com/',
            X: 'https://x.com/',
            Instagram: 'https://instagram.com/',
            Facebook: 'https://facebook.com/'
          }

          return (
            <a
              href={socialLinks[social.Site] + social.Handle}
              key={social._id}
              target='_blank'>
              <img
                src={socialLogos[social.Site]}
                className='invert w-[100px] h-[100px] drop-shadow-xl'
              />
            </a>
          )
        })}
      </div>
    </>
  )
}
