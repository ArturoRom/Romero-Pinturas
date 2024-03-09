
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Capturar os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const bairro = document.getElementById("bairro").value;
    const servico = document.getElementById("servico").value;
    const outro = document.getElementById("outro").value;
    const maoDeObra = document.getElementById("mao_de_obra").checked;


    // Gerar a mensagem de texto para o WhatsApp
    let mensagem = "Nome: " + nome + "\n";
    mensagem += "Bairro: " + bairro + "\n";
    mensagem += "Serviço Desejado: " + servico + "\n";
    mensagem += "Outro Serviço: " + outro + "\n";
    mensagem += "Só Mão de Obra: " + (maoDeObra ? "Sim" : "Não") + "\n";


    // Construir o link do WhatsApp com a mensagem
    const linkWhatsApp = "https://api.whatsapp.com/send?phone=5511951294003&text=" + encodeURIComponent(mensagem);
  
    // Abrir o link do WhatsApp em uma nova aba
    window.open(linkWhatsApp);

    // Limpar os campos do formulário após o envio
    document.getElementById("nome").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("outro").value = "";
    document.getElementById("mao_de_obra").checked = false;
  });
});





