import { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

const Modal = ({ children, setIsOpenModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    // modalRef.current
    // document.querySelector('.modal-box')
    function handleOutClick(event) {
      console.log(modalRef);

      if (!modalRef.current.contains(event.target)) {
        setIsOpenModal(false);
      }
    }

    document.addEventListener('mousedown', handleOutClick);

    return () => {
      console.log('testeeeeee');
      document.removeEventListener('mousedown', handleOutClick);
    }
  }, [])

  return (
    <Container>
      <div className='modal-box' ref={modalRef}>
        <button onClick={() => setIsOpenModal(false)} className='close-button'>
          <MdClose />
        </button>
        Modal
        {children}
      </div>
    </Container>
  )
}

export default Modal;