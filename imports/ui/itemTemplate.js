import { Template } from 'meteor/templating';

import './itemTemplate.html';
import './itemCard.js';

import { Product } from '../api/product.js';

Template.itemTemplate.helpers({
    sale_item() {
        return Product.find({});
    },
});
