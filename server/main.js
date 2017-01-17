'use-strict'

import { Meteor } from 'meteor/meteor';
import { Menu } from '../imports/api/menu.js';
import { Product } from '../imports/api/product.js';

Meteor.startup(() => {
  
});


// CronJob Examples
var everyMinute = new Cron(function() {
    console.log("another minute has passed!");
}, {});

var everyHour = new Cron(function() {
    console.log("it is 24 minutes past the hour");
}, {
    minute: 24
});

var everyMinuteBetween8and9 = new Cron(function() {
    console.log("a minute has passed and it is between 8am and 9am");
}, {
    hour: 8
});

var onceEveryMonth = new Cron(function() {
    console.log("it is high-noon on the 13th of the month, see you next month");
}, {
    minute: 0,
    hour: 12,
    day: 13
});