/* A list of "pages" - this just allows for easy propagation content */
// I decided to do this instead of using react-router because I wanted to 
// keep this a v simple 1 page app. We would use "pages" to mostly keep track of
// things such as which content component to render and which page title to use.
export const PAGES = {
    HOME: {
        name: 'home',
        title: 'Home',
        icon: 'home',
    },
    UNIVERSES: {
        name: 'universes',
        title: 'Universes',
        icon: 'world',
    }
};

/* Themeing of colors */
export const COLORS = {
    GREEN: '#7ca794',
    GREEN_DARK: '#638576',
    WHITE: '#fff',
    THISTLE: '#bfbccb',
    PURPLE: '#71697a',
    RED: '#773344',
}