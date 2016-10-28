import Backbone from 'backbone';
import EntreeItem from '../models/entreeitem';


export default Backbone.Collection.extend({
  model: EntreeItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
    parse: function(response){
      return response.entrees;
    }
});
