import find from 'lodash/find';

import { PAGES } from '../data/constants';

// Find a particular page in the list of pages
export const findPage = (name) => {
    return find(PAGES, { name });
};
