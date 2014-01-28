describe("Sorteio", function() {
  var pessoas;

  beforeEach(function() {
	  pessoas = "Tiago Jesus \nLeonardo minora \nLuan Fonseca";
  });

  it("Retorna uma lista de pessoas", function() {
	  var lista_pessoas = extraiPessoas(pessoas);
	  expect(lista_pessoas.length).toEqual(3);
	  
	  expect(lista_pessoas[0]).toEqual('Tiago Jesus');
  	  expect(lista_pessoas[1]).toEqual('Leonardo minora');
	  expect(lista_pessoas[2]).toEqual('Luan Fonseca');
  });

  it("Bagunçar a lista de pessoas", function() {
     var pessoas = ["Tiago Jesus", "Leonardo minora", "Luan Fonseca"];
     var lista_pessoas = baguncaListaPessoas(pessoas);

     expect(lista_pessoas.length).toEqual(3);
     expect(pessoas).not.toEqual(lista_pessoas);
  });
});
