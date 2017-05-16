import { TanarisPage } from './app.po';

describe('tanaris App', () => {
  let page: TanarisPage;

  beforeEach(() => {
    page = new TanarisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
