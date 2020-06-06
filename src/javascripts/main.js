import './styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';

const init = () => {
  eat.eatQuad();
  play.playQuad();
  fight.fightQuad();
};

init();
