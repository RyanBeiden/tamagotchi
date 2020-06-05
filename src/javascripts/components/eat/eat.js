import './eat.scss';

import utils from '../../../helpers/utils';

let full = 100;

const eatQuad = () => {
  const domString = `
    <h2 class="eat">Eat</h2>
    <h3 class="full">${full}</h3>
    <div class="icons">
      <button id="carrot"><i class="fas fa-carrot"></i></button>
      <button id="ice-cream"><i class="fas fa-ice-cream"></i></button>
    </div>
  `;
  utils.printToDom('#eat', domString);
};

const carrotEvent = (e) => {
  e.preventDefault();
  full = Math.min(full + 10, 100);
  eatQuad();
};

const iceCreamEvent = (e) => {
  e.preventDefault();
  if (full > 0) {
    full = Math.max(full - 3, 0);
  }
  eatQuad();
};

$('body').on('click', '#carrot', carrotEvent);
$('body').on('click', '#ice-cream', iceCreamEvent);

export default { eatQuad };
