// const resultadofinal = (resultado) => console.log(resultado);

// const funcSoma = (num1, num2) => num1 +num2

// let resultadoSoma = funcSoma(10, 8);
// resultadofinal(resultadoSoma)


// const resultadofinal =(resultado) => console.log(resultado);

// const funcSoma =(num1, num2, callback) => {
//     let soma = num1 + num2
//     callback(soma)
// }

// funcSoma(10,18, resultadofinal)

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo