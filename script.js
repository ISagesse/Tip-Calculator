
function calculateTip() {

    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let numPeople = document.getElementById("totalPeople").value;

    // check if the value is null
    if(billAmount === "" || serviceQuality === 0) {
        window.alert("Please enter a value to calcute the tip.");
        return;
    }

    // check if the number of people is empty and less or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    }else {
        document.getElementById("each").style.display = "block";
    }

    // calcutale the total tip.
    let total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // display tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// hide the total amount on load.
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// the button function
document.getElementById("calculate").onclick = function() { calculateTip(); }