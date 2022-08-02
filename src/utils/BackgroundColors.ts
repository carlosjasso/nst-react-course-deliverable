import React from 'react';
import Colors from '../types/Colors';

// coolors palette: https://coolors.co/cacf85-8cba80-658e9c-4d5382-514663
const BackgourndColors : Colors = {
    "Dark Khaki": "#cacf85",
    "Dark Sea Green": "#8cba80",
    "Steel Teal": "#658e9c",
    "Purple Navy": "#4d5382",
    "English Violet": "#514663"
}

export function getRandomBackgroundColor(): string {
    const colorIndex = Math.floor(Math.random() * (Object.keys(BackgourndColors).length - 1) + 1);
    const colorKey = Object.keys(BackgourndColors)[colorIndex];
    return BackgourndColors[colorKey];
}