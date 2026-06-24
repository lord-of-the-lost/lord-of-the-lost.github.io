import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = (): ThemeContext => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used within ThemeContext')
    }

    return context
}
