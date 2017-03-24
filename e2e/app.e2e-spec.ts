import { TestCling2Page } from './app.po';

describe('test-cling2 App', () => {
  let page: TestCling2Page;

  beforeEach(() => {
    page = new TestCling2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
