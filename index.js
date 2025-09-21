function hello() {
    user = document.getElementById("username").value
    console.log("Hello", user)

    Hi_text = document.getElementById("Hello_text")
    Hi_text.innerText = "Hello "+ user
}
hello()

m = 130
if (m >= 199) {
    console.log("Eat Shabu")
}   
else if (m >= 45 && m <= 199) {
    console.log("Eat rice")
} 
else {
    console.log("Eat nothing")
}
