'use strict';

import {
    runCatalog
} from './catalog.js';
import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';

generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();

runCatalog();