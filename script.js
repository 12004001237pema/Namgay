function mood() {
    const change = document.querySelector("body");
        if (change.className == "continer") {
        change.className="changeColor"
        document.querySelector("button").innerHTML="Dark Mode";
        }
       
        else {
            change.className = "continer"
             document.querySelector("button").innerHTML="Light Mode"
        }
    }
    
    function siser() {
    alert("Thank you for registration");
    
    }
    