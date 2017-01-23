import { MarqueePage } from './app.po';

describe('marquee App', function() {
  let page: MarqueePage;

  beforeEach(() => {
    page = new MarqueePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
