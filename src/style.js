import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .caixa-video {
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  video {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .mascara-video {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      109deg,
      rgba(10, 12, 16, 0.99) 15%,
      rgba(10, 12, 16, 0.7) 50%,
      rgba(10, 12, 16, 0.99) 85%
    );
  }

  .caixa-principal {
    width: 40%;
  }

  .logo {
    width: 80%;
  }

  p {
    color: white;
    margin-top: 10px;
    font-size: 1.5rem;
  }

  button {
    height: 2rem;
    width: 7em;
    border: none;
    border-radius: 10%;
    background: #c51111;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }

  .img-m-e-l {
    height: 90%;
  }

  .form {
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 24rem;
    width: 20rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 10%;
    position: absolute;
    left: -310px;
    transition: left 1s linear;
    z-index: 4;
  }

  input {
    border: 1px solid #000;
    border-radius: 10px;
    width: 80%;
    padding: 4px;
  }

  textarea {
    border: 1px solid #000;
    border-radius: 5px;
    width: 80%;
  }

  .btn-formulario {
    height: 2rem;
    width: 10em;
    border: none;
    border-radius: 10px;
    background: #c51111;
    color: #fff;
    cursor: pointer;
    font-size: 10px;
  }

  .mascara-form {
    width: 100vw;
    height: 100vh;
    visibility: hidden;
    position: fixed;
    top: 0;
    z-index: 3;
    background: linear-gradient(
      109deg,
      rgba(10, 12, 16, 0.99) 15%,
      rgba(10, 12, 16, 0.7) 50%,
      rgba(10, 12, 16, 0.99) 85%
    );
  }
`;
