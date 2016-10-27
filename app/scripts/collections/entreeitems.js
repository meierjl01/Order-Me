import Backbone from 'backbone';
import EntreeItem from '../models/entreeitem';
import _ from 'underscore';


export default Backbone.Collection.extend({
  model: EntreeItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
    parse: function(response){
      return response.entrees;
    }
});
