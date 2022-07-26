import React from 'react';
import Colors from '../types/colors';

// coolors palette: https://coolors.co/cacf85-8cba80-658e9c-4d5382-514663
export const BackgourndColors : Colors = {
    "Dark Khaki": "#cacf85",
    "Dark Sea Green": "#8cba80",
    "Steel Teal": "#658e9c",
    "Purple Navy": "#4d5382",
    "English Violet": "#514663"
}

export const BackgroundColorsContext = React.createContext(BackgourndColors);