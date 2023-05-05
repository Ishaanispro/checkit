function login(){
     player_1 = document.getElementById("Player1").value;
     player_2 = document.getElementById("Player2").value;
 
    localStorage.setItem("Player1", player_1);
    localStorage.setItem("Player2", player_2);
    window.location = "game_page.html";
}