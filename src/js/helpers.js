import find from 'lodash/find';

import { PAGES } from '../data/constants';

export const findPage = (name) => {
    return find(PAGES, { name });
};