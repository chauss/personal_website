import { writable } from 'svelte/store';
import themes from '../config/themes';
import type { Theme } from '../types/theme';

export const themeKeys: string[] = themes.map((theme) => theme.name);

const LOCAL_STORAGE_KEY_THEME = 'theme';

const getThemeByName = (themeName: string): Theme | undefined => {
    return themes.find((theme) => theme.name === themeName);
};

const getInitialTheme = (): Theme => {
    const lastThemeName = localStorage.getItem(LOCAL_STORAGE_KEY_THEME);
    const initialThemeName = lastThemeName ? lastThemeName : themes[0].name;

    const initialTheme = getThemeByName(initialThemeName);

    return initialTheme ? initialTheme : themes[0];
};

const themeStore = () => {
    const initialTheme = getInitialTheme();

    const { subscribe, set } = writable<Theme>(initialTheme);

    const setNewThemeByName = (newThemeName: string) => {
        const theme = getThemeByName(newThemeName);
        if (theme) {
            set(theme);
            localStorage.setItem(LOCAL_STORAGE_KEY_THEME, theme.name);
        } else {
            console.error(`Tried to set theme to ${newThemeName} but that theme doesn't exist.`);
        }
    };

    return {
        subscribe,
        setByName: setNewThemeByName,
    };
};

export const theme = themeStore();
