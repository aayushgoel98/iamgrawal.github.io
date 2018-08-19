import { Container } from 'unstated';

export default class MainContainer extends Container {
  state = {
    active: 'about'
  };
}

export const mainContainer = new MainContainer();
