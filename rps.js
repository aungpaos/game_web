function userinput() {
    user_input = document.getElementById("user_input").value
    console.log(user_input)
    botinput()
    

}

function botinput() {
    bot_input = Math.floor((Math.random() * 100) % 3)
    console.log(bot_input)
    compare()

}

// 0 = Rock
// 1 = Paper
// 2 = Scissor

function compare() {
    if (user_input == bot_input) {
        console.log("Tie")
        player_result = 2
    }
    else if (user_input == 0 && bot_input == 1) {
        console.log("Bot wins")
        player_result = 0
    }
    else if (user_input == 0 && bot_input == 2) {
        console.log("Player wins")
        player_result = 1
    }
    else if (user_input == 1 && bot_input == 0) {
        console.log("Player wins")
        player_result = 1
    }
    else if (user_input == 1 && bot_input == 2) {
        console.log("Bot wins")
        player_result = 0
    }
    else if (user_input == 2 && bot_input == 0) {
        console.log("Bot wins")
        player_result = 0
    }
    else if (user_input == 2 && bot_input == 1) {
        console.log("Player wins")
        player_result = 1
    }
    
    result()

}

function result() {
    result = document.getElementById("title_result")
    if (player_result == 0) {
        result.innerText = "Bot wins" + " " + "Press F5 to restart"
    }
    else if (player_result == 1) {
        result.innerText = "Player wins" + " " + "Press F5 to restart"
    }
    else if (player_result == 2) {
        result.innerText = "Tie" + " " + "Press F5 to restart"
    }
    


}
