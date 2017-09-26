import { AngularreduxTodoPage } from './app.po';

describe('angularredux-todo App', () => {
  let page: AngularreduxTodoPage;

  beforeEach(() => {
    page = new AngularreduxTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
