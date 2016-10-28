import $ from 'jquery';
import Backbone from 'backbone';
import renderMenuItem from './views/menuitem';
import renderCourseList from './views/courseview';
import renderOrder from './views/orderview';
import BeerItems from './collections/beeritems';
import EntreeItems from './collections/entreeitems';
import GameItems from './collections/gameitems';
import OrderItems from './collections/orderitems';
import menuView from './views/menuview';
import BeerItem from './models/beeritem';
import OrderItemView from './views/orderitemview';
import EntreeItem from './models/entreeitem';
import GameItem from './models/gameitem';

let beerItems = new BeerItems();
let gameItems = new GameItems();
let entreeItems = new EntreeItems();
let orderItems = new OrderItems();
let menuArea = $('.menu');
let orderArea = $('.order');


const Router = Backbone.Router.extend({
    routes: {
        '': 'home',
    },
    home() {
        beerItems.fetch();
        entreeItems.fetch();
        gameItems.fetch();
        menuArea.append(renderCourseList(entreeItems, gameItems, beerItems, orderItems));
        orderItems.fetch();
        orderArea.append(renderOrder(orderItems));
    },
});

const router = new Router();

export default router;
