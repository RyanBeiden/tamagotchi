import './styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';

const init = () => {
  eat.eatQuad(100);
  play.playQuad(50);
  fight.fightQuad(100);
  sleep.sleepQuad(50);
};

init();
