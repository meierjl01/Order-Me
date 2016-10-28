import Backbone from 'backbone';
import $ from 'jquery';
import OrderItem from '../models/orderitem';

export default Backbone.Collection.extend({
  model: OrderItem,
  url: 'https://tiny-za-server.herokuapp.com/collections/jensorderitems'
});
