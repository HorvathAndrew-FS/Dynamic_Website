let errors = {};
const regex_fName = \b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+;

const validate = () => {
    if(!"\\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+" ){
        errors.fnameMsg = "First Name is required";
    }
}

return errors;