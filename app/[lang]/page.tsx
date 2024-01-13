import { Locale, i18n } from '@/i18n.config'
import Header from "./components/header";

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function Home({
  params
}: {
  params: { lang: Locale }
}) {
  
  return (
    <main >
    <div className=" bg-bg-paper">
      <Header lang={params}/>
    </div>
    </main>
  )
}


