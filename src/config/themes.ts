import type { Theme } from '../types/theme';

const darkModeColors = {
    backgroundColor: '#121212',
    textColorStrong: '#e6e6e6',
    textColorMedium: '#c7c7c7',
    textColorLight: '#8c8c8c',
};

const themes: Theme[] = [
    {
        name: 'dark-blue',
        colors: {
            primaryColor: '#3297C2',
            ...darkModeColors,
        },
    },
    {
        name: 'dark-orange',
        colors: {
            primaryColor: '#BE7B17',
            ...darkModeColors,
        },
    },
    {
        name: 'dark-green',
        colors: {
            primaryColor: '#65C04E',
            ...darkModeColors,
        },
    },
    {
        name: 'dark-purple',
        colors: {
            primaryColor: '#A567F4',
            ...darkModeColors,
        },
    },
];

export default themes;
