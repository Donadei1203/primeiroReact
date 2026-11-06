function Contato() {
    return (
        <main>
            <h1>Entre em Contato Conosco</h1>
            <p>Estamos sempre prontos para ouvir você! Seja para tirar dúvidas, dar feedback, solicitar um orçamento ou apenas bater um papo sobre como podemos ajudar seu negócio, entre em contato através dos canais abaixo.</p>

            <h1>Fale Direto Conosco</h1>
            <p>E-mail: contato@tecnologiasa.com.br</p>
            <p>Telefone / WhatsApp: (00) 99999-9999</p>
            <p>Horário de Atendimento: Segunda a Sexta, das 9h às 18h</p>

            <h1>Onde Estamos</h1>
            <p>Endereço: Rua Exemplo, 123 – Bairro, Cidade/UF</p>
            <p>CEP: 00000-000</p>

            <h1>Envie uma Mensagem</h1>

            <div className="mensagemContato">
                <div>
                    <label htmlFor="">Nome</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Assunto</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Mensagem</label>
                    <input type="text" />
                </div>

            </div>
                <button>Enviar Mensagem</button>

        </main>
    )
}

export default Contato