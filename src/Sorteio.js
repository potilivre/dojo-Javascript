function extraiPessoas (pessoas) {
	return pessoas.split('\n').map(function(p) {
		return p.trim()
	})
}

function baguncaListaPessoas(pessoas) {
   var temp = pessoas.slice(0);
   temp.sort(function() {return 0.5 - Math.random()});
   if (temp > pessoas || temp < pessoas) return temp;
   return baguncaListaPessoas(pessoas);
}


// funcao 3




// funcao 4


