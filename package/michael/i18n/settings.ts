export const fallbackLang = 'vi';
export const languages = [fallbackLang, 'en'];
export const defaultNS = 'default';
export const cookieName = 'i18next';

export function getOptions(language: string = fallbackLang, namespace: string = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLang,
        lng: language,
        fallbackNS: defaultNS,
        defaultNS,
        ns: namespace
    }
}
