document.querySelector('#button').addEventListener('click', conv)

function conv() {
    // console.log("hello twitch");
    let temp = document.querySelector('#celcius').value 
    // temp = temp * 9/5 + 32
    temp = temp * 9/5 + 32
    document.querySelector('#tempInFar').innerText = temp
}

