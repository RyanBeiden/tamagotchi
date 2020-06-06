import './play.scss';

import utils from '../../../helpers/utils';

let fun = 50;

const playQuad = (score) => {
  const domString = `
    <div>
      <a href="https://github.com/RyanBeiden/tamagotchi" target="_blank"><i class="fab fa-github"></i></a>
    </div>
    <h2 class="play">Play</h2>
    <h3 class="fun">${score}</h3>
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
  playQuad(fun);
};

const bikeEvent = (e) => {
  e.preventDefault();
  fun = Math.min(fun + 2, 100);
  playQuad(fun);
};

$('body').on('click', '#skiing', skiEvent);
$('body').on('click', '#bike', bikeEvent);

export default { playQuad };
