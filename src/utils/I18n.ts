import { fallbackLocale, supportedLocales } from '../config/I10n';
import { locale as i18nLocale, init, _, getLocaleFromNavigator, register, isLoading } from 'svelte-i18n';

const pathForLocale = (locale: string) => {
    return `/i18n/${locale}.json`;
};

const getValidLocale = (locale?: string): string => {
    if (locale) {
        return supportedLocales.includes(locale) ? locale : fallbackLocale;
    } else {
        return getLocaleFromNavigator();
    }
};

const initI18n = (initialLocale?: string): void => {
    const locale = getValidLocale(initialLocale);

    init({ initialLocale: locale, fallbackLocale: fallbackLocale, warnOnMissingMessages: false });

    supportedLocales.forEach((locale) => {
        register(locale, () => import('./de.json'));
    });
};

const switchLocaleTo = (newLocale: string): void => {
    const locale = getValidLocale(newLocale);
    i18nLocale.set(locale);
};

export { initI18n, _, switchLocaleTo, i18nLocale as locale, isLoading as translationIsBeingLoaded };
