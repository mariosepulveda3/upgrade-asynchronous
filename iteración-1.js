// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

// fetch('https://api.agify.io?name=michael')
// .then((data) => data.json())
// .then((data) => console.log(data))

// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io/?name=';

const button$$ = document.querySelector("button");
const input$$ = document.querySelector("input");

// function search() {

//   fetch(baseUrl + input$$.value)
//     .then((data) => data.json())
//     .then((data) => console.log(data));
// };

// button$$.addEventListener("click", search);

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

function search() {

    fetch(baseUrl + input$$.value)
      .then((data) => data.json())
      .then((namePerson) => {

        const p$$ = document.createElement('p');
        p$$.textContent = `El nombre ${input$$.value}, `;

        for (const country of namePerson.country) {
            p$$.textContent += `Tiene un ${Math.floor(country.probability*100)} 
            porciento de ser de ${country.country_id}. `;   
        }
        document.body.appendChild(p$$);

    })
}
button$$.addEventListener("click", search);







// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.