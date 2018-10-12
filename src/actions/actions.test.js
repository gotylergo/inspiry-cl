import {
  TOGGLE_MAIN_MENU,
  toggleMainMenu,
  CREATE_PAGE_TITLE,
  createPageTitle,
  TOGGLE_MODAL,
  toggleModal,
} from '../actions';

describe('toggleMainMenu', () => {
  it('Should return the action', () => {
    const action = toggleMainMenu();
    expect(action.type).toEqual(TOGGLE_MAIN_MENU);
  });
});

describe('createPageTitle', () => {
  it('Should return the action', () => {
    const pageTitle = 'writer';
    const action = createPageTitle(pageTitle);
    expect(action.type).toEqual(CREATE_PAGE_TITLE);
    expect(action.pageTitle).toEqual(pageTitle);
  });
});

describe('toggleModal', () => {
  it('Should return the action', () => {
    const modal = 'writer';
    const action = toggleModal(modal);
    expect(action.type).toEqual(TOGGLE_MODAL);
    expect(action.modal).toEqual(modal);
  });
  it('Should return the shareID if modal is share', () => {
    const modal = 'share';
    const shareID = '12345';
    const action = toggleModal(modal, shareID);
    expect(action.shareID).toEqual(shareID);
  });
});
