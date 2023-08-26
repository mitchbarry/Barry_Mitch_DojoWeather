function weatherBurbank() {
    alert("Loading weather report for Burbank...")
}

function weatherChicago() {
    alert("Loading weather report for Chicago...")
}

function weatherDallas() {
    alert("Loading weather report for Dallas...")
}

function accept() {
    cookie.remove()
}

var cookie = document.querySelector(".cookie")

var high1 = document.querySelector("#high1")

var high2 = document.querySelector("#high2")

var high3 = document.querySelector("#high3")

var high4 = document.querySelector("#high4")

var low1 = document.querySelector("#low1")

var low2 = document.querySelector("#low2")

var low3 = document.querySelector("#low3")

var low4 = document.querySelector("#low4")

var high = [24,27,21,26]

var low = [18,19,16,21]

var degreesType = "celsius"

function degrees() {
    console.log(degreesType)
    if (degreesType == "celsius") {
        for (var i=0; i<=3; i++) {
            high[i] = ((high[i] * 1.8)+32).toFixed(1)
            low[i] = ((low[i] * 1.8)+32).toFixed(1)
        }
        degreesType = "farenheit"
    }
    else {
        for (var i=0; i<=3; i++) {
            high[i] = ((high[i] - 32) / 1.8).toFixed(1)
            low[i] = ((low[i] - 32) / 1.8).toFixed(1)
        }
        degreesType = "celsius"
    }
    high1.innerText = high[0]
    high2.innerText = high[1]
    high3.innerText = high[2]
    high4.innerText = high[3]
    low1.innerText = low[0]
    low2.innerText = low[1]
    low3.innerText = low[2]
    low4.innerText = low[3]
}