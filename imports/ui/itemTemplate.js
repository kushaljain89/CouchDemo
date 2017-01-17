import { Template } from 'meteor/templating';

import './itemTemplate.html';
import './itemCard.js';

import { Product } from '../api/product.js';

Template.itemTemplate.helpers({
    sale_item() {
        return Product.find({});
    },
});

/*Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});*/
