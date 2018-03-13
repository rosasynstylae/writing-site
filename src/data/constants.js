/* A list of "pages" - this just allows for easy propagation content */
// I decided to do this instead of using react-router because I wanted to 
// keep this a v simple 1 page app. We would use "pages" to mostly keep track of
// things such as which content component to render and which page title to use.
export const PAGES = {
    HOME: 'home',
};

/* A list of page titles, decided by page */
export const PAGE_TITLES = {
    [PAGES.HOME]: 'Home',
};