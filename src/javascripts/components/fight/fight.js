import './fight.scss';

import utils from '../../../helpers/utils';

let strength = 100;

const fightQuad = () => {
  const domString = `
    <h2 class="fight">Fight</h2>
    <h3 class="strength">${strength}</h3>
    <div class="icons">
      <button id="fist"><i class="far fa-hand-rock fa-rotate-90"></i></button>
      <button id="running"><i class="fas fa-running"></i></button>
    </div>
  `;
  utils.printToDom('#fight', domString);
};

const fistEvent = (e) => {
  e.preventDefault();
  if (strength > 0) {
    strength = Math.max(strength - 10, 0);
  }
  fightQuad();
};

const runEvent = (e) => {
  e.preventDefault();
  strength = Math.min(strength + 1, 100);
  fightQuad();
};

$('body').on('click', '#fist', fistEvent);
$('body').on('click', '#running', runEvent);

export default { fightQuad };
