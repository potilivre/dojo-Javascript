describe("Sorteio", function() {


  beforeEach(function() {
	  var pessoas = "Tiago Jesus \nLeonardo minora \nLuan Fonseca";
  });

  it("Retorna uma lista de pessoas", function() {
	  var pessoas = extraiPessoas(pessoas);
	  expect(pessoas.lenght).toEqual(3);
	  
	  expect(pessoas[0]).toEqual('Tiago Jesus');
  	  expect(pessoas[1]).toEqual('Leonardo minora');
	  expect(pessoas[2]).toEqual('Luan Fonseca');
  });

});
