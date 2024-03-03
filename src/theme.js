import { createContext } from "react";
import { createTheme } from "@mui/material";

export const tokens = () => ({
    olive: "#686628",
    purple: "#3F1B5B",
    yellow: "#FFE20A",
    yellowHover: "rgba(255, 226, 10, 0.3)",
    red: "#BF5529",
    darkOlive:"#686628",
    bgGrey:"#F0F0F0"
})

export const themeSettings = () => {
    const colors = tokens();

    return {
        palette: {
            primary: {
                main: colors.olive
            },
            secondary: {
                main: colors.purple
            },
            neutral: {
                main: colors.yellow
            },
            background: {
                main: colors.red
            }
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14
            },
        }
    }
}

const theme = createTheme(themeSettings());

export default theme;