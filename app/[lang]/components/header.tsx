import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

import BannerDietEnergymSVG from "@/assets/images/banner-diet.svg";
import Link from 'next/link';
const APP_DOMAIN = process.env.NEXT_APP_PWA_DOMAIN as String;
async function Header({
  lang
}: {
  lang: { lang: Locale }
}) {
  const { page } = await getDictionary(lang.lang)
  return (
    <div className="bg-diet-primary-light grid grid-cols-1 lg:grid-cols-2 ">
        <div className='md:justify-self-center'>
        </div>
        <div className="grid grid-cols-1 md:justify-items-center md:items-center pb-14">
          <div className="grid grid-rows-1 gap-4 md:gap-6 justify-items-center ">
            <div className="row-start-1 row-end-1 w-auto md:w-96 lg:w-96">
               <p className="text-2xl/10 md:text-2.5xl/10 pr-6 font-extrabold text-black text-center md:w-96 pb-6">
                {page.home.header.title}
              </p>
              <p className="text-base text-black text-justify px-6  md:px-3">
                {page.home.header.description}
              </p>
            </div>
            <div className="row-start-2">
              <Link  href={`${APP_DOMAIN}?diet=null`} target="_blank">
              <button className="bg-diet-secondry rounded-lg h-10 w-60 md:w-64 px-8 py-1 text-black text-sm md:text-base text-center font-bold">
             {page.home.header.button}
              </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Header;
