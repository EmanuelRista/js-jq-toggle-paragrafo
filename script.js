//Ricreare un titolo di un paragrafo che cliccato mostra il testo sottostante ma utilizzare toggle per la sua visualizzazione;

$("#paragrafo").hide();
$("#titolo").click(function() {
  $("#paragrafo").toggle();
});
