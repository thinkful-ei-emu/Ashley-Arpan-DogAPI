'use strict'

function getImage(input) {
    fetch(`https://dog.ceo/api/breed/${input}/images/random`)
        .then(response => response.json())
        .then(jsonData => {
            //console.log("getImage ran");
            extractData(jsonData);
        })
        .catch(error => console.error(error));
}

const extractData = function (jsonData){    
    console.log(jsonData);
    if (jsonData.status === "error"){
        console.log("error is working");
    $(".image-results").empty().append(`
    <section> 
        <h2> Pick something else </h2>
    </section>`);
    }
    // jsonData.message.forEach(image => {       
         //console.log("extractData ran");
    else{
        $(".image-results").empty().append(createTemplate(jsonData.message));
    }
    
};

const createTemplate = function(image){    
     
    let template = 
    `<section>
    <h2>Check out this breed!</h2>
    <img src="${image}" class="result-img" alt="placeholder">            
    </section>`;    
    // console.log(template);
    return template;    
};


function handleForm() {
    $('#dog-image-form').submit(event => {
        event.preventDefault();        
        let input = $(event.currentTarget).find('#dog-image-search').val();  
        console.log(input);  
        $('.dog-image-search').val("");
        //console.log("handleForm ran");
        getImage(input);
    });
};

$(handleForm);
