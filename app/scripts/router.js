import $ from 'jquery';
import Backbone from 'backbone';
import renderMenuItem from './views/menuitem';
import renderCourseList from './views/courseview';
import renderOrder from './views/orderitem';
import BeerItems from './collections/beeritems';
import EntreeItems from './collections/entreeitems';
import GameItems from './collections/gameitems';
import OrderItems from './collections/orderitems';
import menuView from './views/menuview';
import orderItemView from './views/order';
import Item from './models/item';
import OrderItem from './models/orderitem';

let beerItems = new BeerItems();
let gameItems = new GameItems();
let entreeItems = new EntreeItems();
let orderItems = new OrderItems();
let orderItem = new OrderItem();
let menuArea = $('.menu');
let orderArea = $('.order');


const Router = Backbone.Router.extend({
    routes: {
        ''         : 'home',
        // 'success'  : 'success',
    },
    home() {
        beerItems.fetch();
        entreeItems.fetch();
        gameItems.fetch();
        menuArea.append(renderCourseList(entreeItems, gameItems, beerItems, orderItem));
        // orderItems.fetch();
        orderArea.append(orderItemView(orderItem, orderItems));
    }
    // success() {
    //   menuArea.empty();
    //   orderArea.empty();
    //   menuArea.append(renderOrder(orderItems));
    // }
});

const router = new Router();

export default router;
