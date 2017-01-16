import { Template } from 'meteor/templating';

import './itemTemplate.html';
import './itemCard.js';

var items = [
    {
        name: "Shirt",
        brand: "Park Avenue",
        price: "1000",
        image_url: "http://gloimg.twinkledeals.com/td/2015/201507/goods-img/1477946825332604608.jpg"
    },
    {
        name: "Jeans",
        brand: "Lewis",
        price: "2000",
        image_url: "https://media.frenchconnection.com/ms/fcuk/541ZK_model/768/526/Co-Skinny-Track-Stretch-Jeans.jpg?lc=en-GB&lv=9&404=fcuk/541ZK.jpg"
    },
    {
        name: "Shoes",
        brand: "sketchers",
        price: "1500",
        image_url: "https://www.oscarjacobson.com/media/Oscar-Jacobson_Prince-Shoes_black_92923010_310_front_list.png"
    },
    {
        name: "Shirt",
        brand: "Park Avenue",
        price: "1000",
        image_url: "http://gloimg.twinkledeals.com/td/2015/201507/goods-img/1477946825332604608.jpg"
    },
    {
        name: "Jeans",
        brand: "Lewis",
        price: "2000",
        image_url: "https://media.frenchconnection.com/ms/fcuk/541ZK_model/768/526/Co-Skinny-Track-Stretch-Jeans.jpg?lc=en-GB&lv=9&404=fcuk/541ZK.jpg"
    },
    {
        name: "Shoes",
        brand: "sketchers",
        price: "1500",
        image_url: "https://www.oscarjacobson.com/media/Oscar-Jacobson_Prince-Shoes_black_92923010_310_front_list.png"
    },
    {
        name: "Shirt",
        brand: "Park Avenue",
        price: "1000",
        image_url: "http://gloimg.twinkledeals.com/td/2015/201507/goods-img/1477946825332604608.jpg"
    },
    {
        name: "Jeans",
        brand: "Lewis",
        price: "2000",
        image_url: "https://media.frenchconnection.com/ms/fcuk/541ZK_model/768/526/Co-Skinny-Track-Stretch-Jeans.jpg?lc=en-GB&lv=9&404=fcuk/541ZK.jpg"
    },
    {
        name: "Shoes",
        brand: "sketchers",
        price: "1500",
        image_url: "https://www.oscarjacobson.com/media/Oscar-Jacobson_Prince-Shoes_black_92923010_310_front_list.png"
    }
]

Template.itemTemplate.helpers({
    sale_item() {
        return items;
    },
});

/*Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});*/
