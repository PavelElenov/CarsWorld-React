function errorParser(error){
    let errorMessage = "";
    
    if(error.name == "ValidationError"){
        for(let [field,el] of Object.entries(error.errors)){
            errorMessage = el.properties.message;
        }
    }else{
        errorMessage = error.message;
    }
    return errorMessage;
};

const errorMessage = (title, characters) => {
    return `${title} must be at least ${characters}`;
}

module.exports = {
    errorParser,
    errorMessage,
};