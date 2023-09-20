export const fallbackLang = 'vi';
export const languages = [fallbackLang, 'en'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lang: string = fallbackLang, ns: string = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLang,
        lang,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}
