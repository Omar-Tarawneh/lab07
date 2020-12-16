var UserName = prompt("Please Enter Your Name: ");
alert("Hello " + UserName + "Welcome to Our website.");

var PetName = prompt("Please enter what kind of pet you like: cats, dogs, birds");
var PetColor = prompt("What color you pet like:");
PetCheck(PetName)
alert("So you prefer you bet color to be " + PetColor + " Great");


function PetCheck(name){
    if (name == "cats"){
        alert("So you like " + name + " great I like them to.");

    }else if (name == "dogs"){
        alert("Nice, So you like " + name + "use our websiet to read more about them.");
    }else if (name == "birds"){
        alert("Great, you like " + name + ", I hope you find our website informative about them");
    }else {
        alert("you miss spill the pet name please refresh the page and try again.")
    }
}