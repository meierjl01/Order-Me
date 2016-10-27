import Backbone from 'backbone';
import BeerItem from '../models/beeritem';
import _ from 'underscore';


export default Backbone.Collection.extend({
  model: BeerItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
    parse: function(response){
      return response.Beer;
    }
});
