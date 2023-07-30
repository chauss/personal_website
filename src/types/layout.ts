export type LayoutValues = {
    sidePaddingLeft: string;
    sidePaddingRight: string;
    titleFontSize: string;
    subtitleFontSize: string;
    infoFontSize: string;
    myworkGridColumns: number;
    mysocialmediaGridColumns: number;
};

export type ResponsiveLayout = {
    small: LayoutValues;
    medium: LayoutValues;
    large: LayoutValues;
    xtralarge: LayoutValues;
};
