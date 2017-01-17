'use-strict'

import { Meteor } from 'meteor/meteor';
import { Menu } from '../imports/api/menu.js';
import { Product } from '../imports/api/product.js';

Meteor.startup(() => {
  
});

var everyMinute = new Cron(function() {
    console.log("another minute has passed!");
}, {});