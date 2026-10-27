import "./rodape.css";

function Footer() {
  return (
    <footer>
      <div id="links-rodape">
        <h4>Company</h4>
        <a href="#">Sobre nós</a>
        <a href="#">Contato</a>
        <a href="#">Reservation</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Condition</a>
      </div>
      <div>
        <h4>Endereço</h4>
        <p>
          <i></i>Av. Seila, Mogi das Cruzes-SP, Brasil
        </p>
        <p>
          <i></i>+012 345 67890
        </p>
        <p>
          <i></i>info@example.com
        </p>
        <div>
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="horarios">
        <h4>Aberto:</h4>
        <div>
          <h5>Segunda à Sexta</h5>
          <p>09h00 - 21h00</p>
        </div>
        <div>
          <h5>Sábados:</h5>
          <p>10h00 às 08h00</p>
        </div>
      </div>
      <div>
        <h4>Newsletter</h4>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        {/* <div style="max-width: 400px;"> */}
        <div>
          <input type="text" placeholder="Your email" />
          <button type="button">SignUp</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
