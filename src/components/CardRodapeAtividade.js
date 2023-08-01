const CardRodapeAtividade = () => {
    const imprimir = () => {
        window.print();
    }

    return (
        <div>
            <div style={{textAlign: "right"}}>
                <button className="btnImprimir" onClick={imprimir}>IMPRIMIR</button>
            </div>
            <p class="esp10 tamanho1"><b>Créditos da aula:</b></p>
            <p class="esp10 tamanho1">Geraldo Felipe - IFRN/CNAT (2023)</p>
        </div>
    )
};

export default CardRodapeAtividade;