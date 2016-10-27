import Backbone from 'backbone';
import GameItem from '../models/gameitem';
import _ from 'underscore';


export default Backbone.Collection.extend({
  model: GameItem,
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
    parse: function(response){
      return response.games;
    }
});
