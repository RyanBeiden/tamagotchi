import './sleep.scss';

import utils from '../../../helpers/utils';

let energy = 50;

const sleepQuad = () => {
  const domString = `
    <h2 class="sleep">Sleep</h2>
    <h3 class="energy">${energy}</h3>
    <div class="icons">
      <button id="bed"><i class="fas fa-bed"></i></button>
      <button id="nap"><div class="nap-text"><span style="font-size: 15px;">Z</span><span style="font-size: 20px;">Z</span><span style="font-size: 25px;">Z</span>
      </div></button>
    </div>
  `;
  utils.printToDom('#sleep', domString);
};

const bedEvent = (e) => {
  e.preventDefault();
  energy = Math.min(energy + 60, 100);
  sleepQuad();
};

const napEvent = (e) => {
  e.preventDefault();
  energy = Math.min(energy + 50, 100);
  sleepQuad();
};

$('body').on('click', '#bed', bedEvent);
$('body').on('click', '#nap', napEvent);

export default { sleepQuad };
