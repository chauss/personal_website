import { fallbackLocale, supportedLocales } from '../config/I10n';
import { locale as i18nLocale, init, _, getLocaleFromNavigator, dictionary, isLoading, addMessages } from 'svelte-i18n';
import de from '../assets/i18n/de.json';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';

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

    // For now manually and statically added since dynamic import is not working out of the box
    addMessages('de', de);
    addMessages('en', en);
    addMessages('es', es);
};

const switchLocaleTo = (newLocale: string): void => {
    const locale = getValidLocale(newLocale);
    i18nLocale.set(locale);
};

export { initI18n, _, switchLocaleTo, i18nLocale as locale };
