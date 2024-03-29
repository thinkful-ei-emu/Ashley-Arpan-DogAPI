'use strict'

function getImage(input) {
    fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
        .then(response => response.json())
        .then(jsonData => {
            console.log("getImage ran");
            extractData(jsonData);
        })
        .catch(error => console.error(error));

}

const extractData = function (jsonData){    
    console.log(jsonData);
    jsonData.message.forEach(image => {       
        console.log("extractData ran");                
        $(".image-results").append(createTemplate(image));        
    });
    
};

const createTemplate = function(image){    
     
    let template = 
    `<section>
    <h2>Check out this dog!</h2>
    <img src="${image}" class="result-img" alt="placeholder">            
    </section>`;    
    console.log(template);
    return template;    
};


function handleForm() {
    $('#dog-image-form').submit(event => {
        event.preventDefault();        
        let input = $(event.currentTarget).find('#dog-image-search').val();  
        if( input > 0 && input <= 50){
            $('#dog-image-form :input').val("");
            console.log("handleForm ran");
            $(".image-results").empty(); 
            getImage(input);  
        }
        else {
            alert ("Pick another number between 1-50");
            $('#dog-image-form :input').val("");
            $(".image-results").empty(); 
        }   
        
        
            
    });
};

$(handleForm);
