import Colors from "../types/colors";

export function getRandomBackgroundColor(backgourndColors: Colors): string {
    const colorIndex = Math.floor(Math.random() * (Object.keys(backgourndColors).length - 1) + 1);
    const colorKey = Object.keys(backgourndColors)[colorIndex];
    return backgourndColors[colorKey];
  }