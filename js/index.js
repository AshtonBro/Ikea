'use strict';
import './storage.js';
import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import generateGoods from './generateGoods.js';
import generateItemPage from './generateItemPage.js';
import {
    loadData
} from './loadData.js';

generateHeader();
generateFooter();
generateCatalog();
generateGoods();
generateItemPage();

loadData();