import { Languages } from "./app/[lang]/Models/languages.enum"

export const i18n = {
    defaultLocale: Languages.FARSI,
    locales: [Languages.FARSI, Languages.ENGLISH]
  } as const
  
  export type Locale = (typeof i18n)['locales'][number]
  