import Logo from "./assets/logo.png";
import Mario from "./assets/mario.png";
import Video from "./assets/video.mp4";
import { Div } from "./style";

function App() {
  function ShowForm() {
    const formulario = document.querySelector(".form");
    const mascara = document.querySelector(".mascara-form");
    formulario.style.left = "500px";
    mascara.style.visibility = "visible";
  }

  function HiddenForm() {
    const formulario = document.querySelector(".form");
    const mascara = document.querySelector(".mascara-form");
    formulario.style.left = "-310px";
    mascara.style.visibility = "hidden";
  }
  return (
    <Div>
      <div className="caixa-video">
        <video src={Video} autoPlay loop muted></video>
        <div className="mascara-video"></div>
      </div>
      <div className="caixa-principal">
        <img src={Logo} alt="logo do super mario" className="logo" />
        <p>Encanadores Mario & Luigi - Resolvendo Seus Problemas Com Estilo!</p>
        <p>
          Você já se encontrou em uma situação de emergência com encanamento?
          Vazamentos inesperados, canos entupidos ou torneiras que não param de
          pingar? Não se preocupe, porque estamos aqui para salvar o dia!
          Apresentamos a vocês os encanadores mais famosos do Reino dos
          Cogumelos - Mario e Luigi!
        </p>
        <button onClick={ShowForm}>Fale conosco</button>
      </div>
      <img src={Mario} alt="Imagem de Mario e Luigi" className="img-m-e-l" />
      <form
        className="form"
        action="https://formsubmit.co/fagundesdiego2015bolcombr@gmail.com"
        method="POST"
      >
        <input type="name" placeholder="Seu Nome" name="nome" required />
        <input type="tel" placeholder="Seu Telefone" name="telefone" required />
        <textarea
          placeholder="Digite seu problema aqui"
          rows="10"
          name="info"
          required
        ></textarea>
        <button onClick={HiddenForm} className="btn-formulario">
          Enviar Formulario
        </button>
      </form>
      <div className="mascara-form"></div>
    </Div>
  );
}

export default App;
