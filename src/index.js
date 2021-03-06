const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("API para gerar pdf, passe o link da página que deseja converter (url), e o caminho de onde será salvo o PDF (local) junto ao nome do arquivo (nomePDF) para o caminho /2pdf usando o método POST para usar a API");
})

app.post("/2pdf", async (req, res) => {
    const toPDF = require("./controllers/2pdf");
    const retorno = await toPDF(req.body);
    return res.json(retorno);
});

var porta = (process.env.PORT || 3000);

app.listen(porta, () => {
    console.log("Servidor executando na porta " + porta);
});