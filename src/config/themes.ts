import type { Theme } from '../types/theme';

const darkModeColors = {
    backgroundColor: '#121212',
    textColorStrong: '#e3e3e3',
    textColorMedium: '#c1c1c1',
    textColorLight: '#898989',
};

const themes: Theme[] = [
    {
        name: 'dark-blue',
        colors: {
            primaryColor: '#2D799F',
            ...darkModeColors,
        },
    },
    {
        name: 'dark-orange',
        colors: {
            primaryColor: '#C76838',
            ...darkModeColors,
        },
    },
    {
        name: 'dark-green',
        colors: {
            primaryColor: '#409F2D',
            ...darkModeColors,
        },
    },
    {
        name: 'dark-rose',
        colors: {
            primaryColor: '#BF364D',
            ...darkModeColors,
        },
    },
    {
        name: 'dark-purple',
        colors: {
            primaryColor: '#5065CE',
            ...darkModeColors,
        },
    },
];

export default themes;
