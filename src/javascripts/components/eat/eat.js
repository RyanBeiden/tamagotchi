import './eat.scss';

import utils from '../../../helpers/utils';

let full = 80;

const carrotEvent = (e) => {
  e.preventDefault();
  if (full <= 100) {
    full += 10;
  }
  // eslint-disable-next-line no-use-before-define
  checkNumber();
};

const iceCreamEvent = (e) => {
  e.preventDefault();
  if (full <= 100) {
    full -= 3;
  }
  // eslint-disable-next-line no-use-before-define
  checkNumber();
};

const eatQuad = () => {
  const domString = `
    <h2 class="eat">Eat</h2>
    <h3 class="full">${full}</h3>
    <div class="icons">
      <a id="carrot"><i class="fas fa-carrot"></i></a>
      <a id="ice-cream"><i class="fas fa-ice-cream"></i></a>
    </div>
  `;
  utils.printToDom('#eat', domString);
  $('#carrot').click(carrotEvent);
  $('#ice-cream').click(iceCreamEvent);
};

const checkNumber = () => {
  if (full <= 100) {
    eatQuad();
  }
};

export default { eatQuad };
