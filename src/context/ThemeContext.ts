import { createContext } from "react";

export type Theme = 'theme-light' | 'theme-dark'

export interface ThemeContext {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext | undefined>(undefined)
