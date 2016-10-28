import $ from 'jquery';
import Backbone from 'backbone';
import renderMenuItem from './menuitem';



function renderCourseList(entreeItems, gameItems, beerItems, orderItems) {

    const div = $(`
    <div class="wholeMenu">
    </div>
    `);

    const ListOfEntrees = $(`
      <div class="entrees">
      <h2>Entrees</h2>
      </div>
    `);

    const ListOfBeer = $(`
        <div class="beer">
        <h2>Beer</h2>
        </div>
      `);

    const ListOfGames = $(`
          <div class="games">
          <h2>Games</h2>
          </div>
        `);


    entreeItems.forEach((item) => {
        ListOfEntrees.append(renderMenuItem(item, orderItems));
        div.prepend(ListOfEntrees);
    });

    entreeItems.on('update', () => {
        entreeItems.forEach((item) => {
            ListOfEntrees.append(renderMenuItem(item, orderItems));
            div.prepend(ListOfEntrees);
        });
    });

beerItems.forEach((item) => {
    ListOfBeer.append(renderMenuItem(item, orderItems));
    div.append(ListOfBeer);
});

beerItems.on('update', () => {
    beerItems.forEach((item) => {
        ListOfBeer.append(renderMenuItem(item, orderItems));
        div.append(ListOfBeer);
    });
});


gameItems.forEach((item) => {
    ListOfGames.append(renderMenuItem(item, orderItems));
    div.append(ListOfGames);
});

gameItems.on('update', () => {
    gameItems.forEach((item) => {
        ListOfGames.append(renderMenuItem(item, orderItems));
        div.append(ListOfGames);
    });
});
return div;
}

export default renderCourseList;
