export enum Colors {
    White = '#FFF',
    Gray = '#9d9390',
    ProductBtn = '#8f8480',
    TextPrimary = '#333333',
    TextSecondary = '#777777',
    Black='black'
}

export enum MenColors {
    TextPrimary = '#FFFFFF',
    TextSecondary = '#D0D0D0',
}
export enum WomenColors {
    TextPrimary = '#1A1A1A',
    TextSecondary = '#404040',
}

export const returnColors = (gender:'women' | 'men') => (gender === 'women' ? WomenColors : MenColors);
