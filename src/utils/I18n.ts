import { fallbackLocale, supportedLocales } from '../config/I10n';
import { locale as i18nLocale, init, _, getLocaleFromNavigator, addMessages } from 'svelte-i18n';
import de from '../assets/i18n/de.json';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';

const LOCAL_STORAGE_KEY_LOCALE = 'locale';

const getValidLocale = (locale?: string): string => {
    if (locale) {
        return supportedLocales.includes(locale) ? locale : fallbackLocale;
    } else {
        const lastLocale = localStorage.getItem(LOCAL_STORAGE_KEY_LOCALE);
        return lastLocale ? lastLocale : getLocaleFromNavigator();
    }
};

const initI18n = (initialLocale?: string): void => {
    const locale = getValidLocale(initialLocale);

    init({ initialLocale: locale, fallbackLocale: fallbackLocale, warnOnMissingMessages: false });
    localStorage.setItem(LOCAL_STORAGE_KEY_LOCALE, locale);

    // For now manually and statically added since dynamic import is not working out of the box
    addMessages('de', de);
    addMessages('en', en);
    addMessages('es', es);
};

const switchLocaleTo = (newLocale: string): void => {
    const locale = getValidLocale(newLocale);
    localStorage.setItem(LOCAL_STORAGE_KEY_LOCALE, locale);
    i18nLocale.set(locale);
};

export { initI18n, _, switchLocaleTo, i18nLocale as locale };
