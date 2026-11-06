import img_adidas from "../assets/Adidas_logo.png"
import img_gm from "../assets/General_Motors.svg"
import img_kumon from "../assets/kumon-logo-png_seeklogo-80734.png"

function Sobrenos() {
  return (
    <main>
      <h1>Sobre Nós</h1>
      <p>A Tecnologia S.A. é uma empresa dedicada à transformação digital e à inovação contínua. Com foco no desenvolvimento de soluções tecnológicas inteligentes, a companhia atua na criação de ecossistemas eficientes, seguros e escaláveis para impulsionar negócios dos mais diversos segmentos.</p>
      <p>Nossa missão é aproximar a tecnologia do dia a dia das pessoas e das organizações, simplificando processos complexos através de softwares de ponta, infraestrutura em nuvem e análise avançada de dados. Unimos visão estratégica, engenharia de alto nível e foco absoluto na experiência do cliente para entregar resultados sustentáveis e de alto impacto.</p>
      <p>Guiada pela excelência e pelo compromisso com o futuro, a Tecnologia S.A. transforma ideias em soluções práticas, ajudando parceiros e clientes a liderarem em um mercado em constante evolução.</p>
      <div className="marcasParceiras">
        <h1>Marcas Parceiras</h1>
        <div className="marcas">
          <img src={img_adidas} alt="" />
          <img src={img_gm} alt="" />
          <img src={img_kumon} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Sobrenos;
