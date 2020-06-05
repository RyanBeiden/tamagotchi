import './eat.scss';
import utils from '../../../helpers/utils';

const test = () => {
  const domString = `
    <h1>My print to dom works!!!</h1>
  `;
  utils.printToDom('#eat', domString);
};

export default { test };
