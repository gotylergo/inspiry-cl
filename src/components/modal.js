import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import HelpModal from './help-modal';
import AuthModal from './auth-modal';
import AuthSuccessModal from './auth-modal';
import ErrorModal from './error-modal';
import WriterCompleteModal from './writer-complete-modal'
import {toggleModal} from '../actions';
import './modal.css';

class Modal extends Component {
  render() {
    const ModelContent = () => {
      const props = {
        toggleModal: () => {
          this.props.toggleModal();
        },
      };
      if (this.props.modalActive === 'help') {
        return (<HelpModal {...props} />);
      } else if (this.props.modalActive === 'auth') {
        return (<AuthModal {...props} />);
      } else if (this.props.modalActive === 'authSuccess') {
        return (<AuthSuccessModal {...props} />)
      } else if (this.props.modalActive === 'error') {
        return (<ErrorModal {...props} />)
      } else if (this.props.modalActive === 'writerComplete') {
        return (<WriterCompleteModal {...props} />)
      }
      return (
        <div className="modal-container" >
          <p>Oops! You weren’t supposed to see that!</p>
          <p>Stop looking! Close me and try that again! <span role="img" aria-label="Cheeky monkey covering eyes" >🙈</span></p>
        </div>
      );
    };

    // Close modal when container is clicked

    // const containerCloseModal = (e) {
    //     document.body.onclick(function(e) {
    //     this.props.toggleModal().stopPropogation();
    //     });
    // }

    return (
      <div className="modal shadow" >
        <div className="modal-container shadow" >
          <div className="close-btn-container"><button onClick={() => this.props.toggleModal()} className="button close-button"><FontAwesomeIcon icon="times" className="shadow-fa" /></button></div>
          <ModelContent />
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  mainMenuActive: state.mainMenuActive,
  modalActive: state.modalActive,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modal) => dispatch(toggleModal(modal)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Modal);
