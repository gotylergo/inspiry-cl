import {inspiryReducer} from './index';
import {toggleMainMenu, createPageTitle, toggleModal} from '../actions';

describe('Inspiry reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const defaultState = {
      mainMenuActive: false,
      modalActive: 'inactive',
      pageTitle: 'inspiry',
      docTitle: 'inspiry: unblock your brain',
      shareID: '',
    };
    const state = inspiryReducer({});
    expect(state.mainMenuActive).toEqual(defaultState.mainMenuActive);
    expect(state.modalActive).toEqual(defaultState.modalActive);
    expect(state.pageTitle).toEqual(defaultState.pageTitle);
    expect(state.docTitle).toEqual(defaultState.docTitle);
    expect(state.shareID).toEqual(defaultState.shareID);
  });

  describe('toggleMainMenu', () => {
    it('Should toggle the main menu', () => {
      let state = {
        mainMenuActive: false,
      };
      state = inspiryReducer(state, toggleMainMenu());
      expect(state.mainMenuActive).toEqual(true);
    });
  });

  describe('createPageTitle', () => {
    it('Should create the appropriate page and doctitle', () => {
      let state = {
        pageTitle: 'inspiry',
        docTitle: 'inspiry: unblock your brain',
      };

      state = inspiryReducer(state, createPageTitle('writer'));
      expect(state.pageTitle).toEqual('writer');
      expect(state.docTitle).toEqual('inspiry: writer');
    });
    it('Should create a special title for the homepage', () => {
      let state = {
        pageTitle: 'my stories',
        docTitle: 'inspiry: my stories',
      };

      state = inspiryReducer(state, createPageTitle('home'));
      expect(state.pageTitle).toEqual('inspiry');
      expect(state.docTitle).toEqual('inspiry: unblock your brain');
    });
  });
  describe('toggleModal', () => {
    it('Should toggle the modal', () => {
      let state = {
        modalActive: 'inactive',
      };
      state = inspiryReducer(state, toggleModal('help'));
      expect(state.modalActive).toEqual('help');
    });
  });
});
