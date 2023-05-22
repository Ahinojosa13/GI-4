// HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color 
// white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include 
// the correct class for the background. 
// Create a single function that takes an input className and updates the body's classList to ONLY include that className

// // function changeBackground(className){
// //     if(className){
// //         document.getElementsById('red').style.backgroundColor = "red";
// //     } else{
// //         document.getElementsById('white').style.backgroundColor = "white";
// //     };
// // }

// const button = document.getElementById("red");
// const button2 = document.getElementById("white");

// // button.addEventListener("click", () => {
// //     red.classList.toggle('hide')
// // } )

let btns = document.getElementsByClassName("btn");
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        let buttonStyle = getComputerStyle(this);
        let buttonBgColor = buttonStyle["backgroundColor"];
        document.body.style.backgroundColor= buttonBgColor;
    });
}