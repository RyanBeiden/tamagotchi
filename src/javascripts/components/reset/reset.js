import eat from '../eat/eat';
import play from '../play/play';
import sleep from '../sleep/sleep';


const reset = () => {
  const full = 100;
  const fun = 50;
  const energy = 50;

  eat.eatQuad(full);
  play.playQuad(fun);
  sleep.sleepQuad(energy);
};

export default { reset };
