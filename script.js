'use strict'

function getImage(input) {
    fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
        .then(response => response.json())
        .then(jsonData => {
            createTemplate(jsonData)})
        .catch(error => alert ('Something went wrong. Try again later.'))
}

const extractData = function (jsonData){
    jsonData.forEach(image => {
        let {
            message
        } = image;
    })
    $(".image-results").append(createTemplate(message));
}

// function displayResults(jsonData) {
//   let display = 
//     `<section>
//     <h2>Check out this dog!</h2>
//     <img src="${jsonData}" class="result-img" alt="placeholder">
//     </section>` 
    
// }

const createTemplate = function(message){    
       
    let template = `<section>
    <h2>Check out this dog!</h2>
    <img src="${message}" class="result-img" alt="placeholder">
    </section>`; 
    
}


function handleForm() {
    $('#dog-image-form').submit(event => {
        event.preventDefault();        
        let input = $('#dog-image-search').val();
        $('.dog-image-search').val("");
        getImage(input);
    });
}

$(handleForm);
