import { TufilmotkPage } from './app.po';

describe('tufilmotk App', function() {
  let page: TufilmotkPage;

  beforeEach(() => {
    page = new TufilmotkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
