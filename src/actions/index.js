export const TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';
export const toggleMainMenu = () => ({
  type: TOGGLE_MAIN_MENU,
});

export const CREATE_PAGE_TITLE = 'CREATE_PAGE_TITLE';
export const createPageTitle = (pageTitle) => ({
  type: CREATE_PAGE_TITLE,
  pageTitle,
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (modal, shareID) => ({
  type: TOGGLE_MODAL,
  modal,
  shareID,
});
