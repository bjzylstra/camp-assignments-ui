import { CampAssignmentsUiPage } from './app.po';

describe('camp-assignments-ui App', () => {
  let page: CampAssignmentsUiPage;

  beforeEach(() => {
    page = new CampAssignmentsUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
