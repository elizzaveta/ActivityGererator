export const apiBaseUrl = "https://www.boredapi.com/api/activity"
import lightThemeMockup from "../icons/images/Light Theme mockup.png"
import darkThemeMockup from "../icons/images/Dark Theme mockup.png"

export const uiThemeColors =  {
    LIGHT: "light-theme",
    DARK: "dark-theme"
}
export const uiAccentColors =  {
    PINK: "pink-accent",
    GREEN: "green-accent",
    BLUE: "blue-accent"
}

export const uiThemeSettings = [
    {
        name: "Light",
        image: lightThemeMockup,
        className: "light-theme",
        tag: "default"
    },
    {
        name: "Dark",
        image: darkThemeMockup,
        className: "dark-theme"
    }
]
export const uiAccentSettings= [
    {
        name: "Pink",
        className: "pink-accent",
        tag: "default"
    },
    {
        name: "Green",
        className: "green-accent"
    },
    {
        name: "Blue",
        className: "blue-accent"
    }
]