import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;

  .modal-box {
    background: #fff;
    padding: 3rem;
    border-radius: 5px;
    box-shadow: 3px 3px 8px 0px #63b447;
    position: relative;

    .close-button {
      position: absolute;
      top: -9px;
      right: -9px;

      background: #63b447;
      width: 21px;
      height: 21px;

      border: none;
      border-radius: 50%;
      color: #fff;
    }
  }
`;
