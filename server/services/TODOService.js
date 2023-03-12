const {errorMessage} = require("../utils/errorParser");

const validateData = (data) => {
    if(data.name.length < 3){
        const message = errorMessage("Name", 3);
        throw new Error(message);
    }else if(data.email.length < 10){
        const message = errorMessage("Email", 10);
    }else{
        return true;
    }
};
