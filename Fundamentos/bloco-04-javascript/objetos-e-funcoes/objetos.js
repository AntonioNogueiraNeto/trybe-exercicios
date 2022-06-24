let singer = {
  name: "Milton",
  lastName: "Nascimento",
  nickName: "Bituca",
  age: 77,
  bestAlbuns: ["Travessia", "Clube da Esquina", "Minas"],
  bornInfo: {
    city: "Rio de Janeiro",
    state: "Rio de Janeiro",
  },
};

console.table(singer);
singer["fullName"] = singer.name + " " + singer.lastName;
console.log(
  "O cantor " + singer.fullName + "possui " + singer.age + " anos de idade"
);

console.log(singer.bornInfo.city);
console.log(singer.bornInfo.state);

let car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

console.table(car);

let diasDaSemana = {
  1: "domingo",
  2: "segunda",
  3: "terça",
  4: "quarta",
  5: "quinta",
  6: "sexta",
  7: "sábado",
};

/*  diasDaSemana.1; // SyntaxError: Unexpected number */
console.log(diasDaSemana["1"]); // domingo



let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey













  