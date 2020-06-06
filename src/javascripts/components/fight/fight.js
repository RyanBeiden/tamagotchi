import './fight.scss';

import utils from '../../../helpers/utils';
import reset from '../reset/reset';

let strength = 100;

const fightQuad = (score) => {
  const domString = `
    <div>
      <p class="reset" id="reset"><a>Reset</a></p>
    </div>
    <h2 class="fight">Fight</h2>
    <h3 class="strength">${score}</h3>
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
  fightQuad(strength);
};

const runEvent = (e) => {
  e.preventDefault();
  strength = Math.min(strength + 1, 100);
  fightQuad(strength);
};

const resetEvent = (e) => {
  e.preventDefault();
  strength = 100;
  fightQuad(strength);
  reset.reset();
};

$('body').on('click', '#fist', fistEvent);
$('body').on('click', '#running', runEvent);
$('body').on('click', '#reset', resetEvent);

export default { fightQuad };
