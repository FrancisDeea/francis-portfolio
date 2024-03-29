import 'server-only';

const dictionaries = {
    es: () => import('./es.json').then(module => module.default),
    en: () => import('./en.json').then(module => module.default)
}

export default async function getDictionary(locale) {
    return dictionaries[locale]()
}