import type { ResponsiveLayout } from '../types/layout';

export const layout: ResponsiveLayout = {
    small: {
        sidePaddingLeft: '20px',
        sidePaddingRight: '20px',
        titleFontSize: '40px',
        subtitleFontSize: '20px',
        infoFontSize: '16px',
        myworkGridColumns: 1,
        mysocialmediaGridColumns: 1,
    },
    medium: {
        sidePaddingLeft: '40px',
        sidePaddingRight: '40px',
        titleFontSize: '56px',
        subtitleFontSize: '20px',
        infoFontSize: '18px',
        myworkGridColumns: 2,
        mysocialmediaGridColumns: 2,
    },
    large: {
        sidePaddingLeft: '60px',
        sidePaddingRight: '60px',
        titleFontSize: '64px',
        subtitleFontSize: '24px',
        infoFontSize: '20px',
        myworkGridColumns: 2,
        mysocialmediaGridColumns: 2,
    },
    xtralarge: {
        sidePaddingLeft: '80px',
        sidePaddingRight: '80px',
        titleFontSize: '72px',
        subtitleFontSize: '24px',
        infoFontSize: '18px',
        myworkGridColumns: 3,
        mysocialmediaGridColumns: 3,
    },
};
