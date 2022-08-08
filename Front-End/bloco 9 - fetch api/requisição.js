const fetch = require('node-fetch');


// const getRandomAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice'
//   const request =  fetch(url)
//     .then((response) => response.json())
//     .then(({ slip: { id, advice } }) => console.log(advice))
//     .catch((error) => console.log(error));
// }

// getRandomAdvice();


const getRandomAdvice = async () =>{
    try{
        const url = 'https://api.adviceslip.com/advice';
        const request = await fetch(url);
        const json = await request.json();
        const { slip: { id, advice} } = json
        console.log(advice)
        return advice
    } catch (err){
        return `Always check your Internet connection and your URLs.`
    }
}

getRandomAdvice()