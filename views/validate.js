let errors = {};

const regex_Name = "\\b([A-ZÀ-ÿ][-,a-z. /]+[ ]*)+";
const regex_Email = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
const regex_Address = "^(\\d{1,}) [a-zA-Z0-9\\s]+(\\,)? [a-zA-Z]+(\\,)? [A-Z]{2} [0-9]{5,6}$";
const regex_City = "^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$";
const regex_State = "[^,]*[A-Z]{2}";
const regex_Zip = "/(^\d{5}$)|(^\d{5}-\d{4}$)/";
const regex_Password = "/^[A-Za-z]\w{7,14}$/";


module.exports = (req, res, next) => {
  console.log('err', errors);

   const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.userEmail;
    const address = req.body.userAddress;
    const city = req.body.userCity;
    const state = req.body.userState;
    const zip = req.body.userZip;
    const password = req.body.userPassword;
    const passMatch = req.body.userPassMatch;

    if(fName != regex_Name){
        errors.fnameMsg = "First Name is required";
    }
    // if (lName != regex_Name){
    //     errors.lnameMsg = "Last Name is required";
    // }
    // if (email != regex_Email){
    //     errors.emailMsg = "Email is required";
    // }
    // if (address != regex_Address){
    //     errors.addressMsg = "Invalid Address!"
    // }
    // if (city != regex_City){
    //     errors.cityMsg = "Invalid City!"
    // }
    // if (state != regex_State){
    //     errors.stateMsg = "Invalid State!"
    // }
    // if (zip != regex_Zip){
    //     errors.zipMsg = "Invalid Zip!"
    // }
    // if (password != regex_Password){
    //     errors.passwordMsg = "Invalid Password! Must be at least 7 characters and start with a letter";
    // }
    // if (passMatch != password){
    //     errors.passMatchMsg = "Passwords must match";
    // }

  req.errors = errors;
  next();
};

   
