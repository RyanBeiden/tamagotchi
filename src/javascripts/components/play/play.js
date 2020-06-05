import './play.scss';

import utils from '../../../helpers/utils';

let fun = 50;

const playQuad = () => {
  const domString = `
    <h2 class="play">Play</h2>
    <h3 class="fun">${fun}</h3>
    <div class="icons">
      <button id="skiing"><i class="fas fa-skiing"></i></button>
      <button id="bike"><i class="fas fa-bicycle"></i></button>
    </div>
  `;
  utils.printToDom('#play', domString);
};

const skiEvent = (e) => {
  e.preventDefault();
  fun = Math.min(fun + 50, 100);
  playQuad();
};

const bikeEvent = (e) => {
  e.preventDefault();
  fun = Math.min(fun + 2, 100);
  playQuad();
};

$('body').on('click', '#skiing', skiEvent);
$('body').on('click', '#bike', bikeEvent);

export default { playQuad };
