import {inspiryReducer} from './index';
import {toggleMainMenu, createPageTitle, toggleModal} from '../actions';

describe('Inspiry reducer', () => {
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
