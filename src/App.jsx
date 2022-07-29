import { useState } from 'react';
import Counter from './components/Counter';
import Modal from './components/Modal';
import Button from './components/Button';
import Global from './styles/global';

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className='App'>
      <Global />

      <Button
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        Abrir/Fechar Modal
      </Button>

      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <Counter />
        </Modal>
      )}
    </div>
  );
}

export default App;
