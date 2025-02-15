document.addEventListener("DOMContentLoaded", () => {
    const round_number=document.querySelector(".round_number")
    const user_score = document.querySelector(".user_score");
const c_score=document.querySelector(".computer_score")
    function getComputerScore(userChoice) {
        let computerChoice = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

        if (userChoice === computerChoice) {
            console.log("It's a tie!"); // No score change
            let r_num=parseInt(round_number.textContent)
            r_num+=1;
            round_number.textContent=r_num
            if(r_num===5&&parseInt(user_score.textContent)>parseInt(c_score.textContent)){
                alert("user won")
            }
            else if(r_num===5&&parseInt(user_score.textContent)===parseInt(c_score.textContent)){
                alert("its a tie")
            }

            else if(r_num===5&&parseInt(user_score.textContent)<parseInt(c_score.textContent)){
                alert("computer won")
            }
        } else if (
            (userChoice === 0 && computerChoice === 2) || // Rock beats Scissors
            (userChoice === 1 && computerChoice === 0) || // Paper beats Rock
            (userChoice === 2 && computerChoice === 1)    // Scissors beats Paper
        ) {
            let r_num=parseInt(round_number.textContent)
            r_num+=1;
            round_number.textContent=r_num
            let num = parseInt(user_score.textContent);
            num += 1;
            user_score.textContent = num; // User wins the round
            console.log("User wins!");
            if(r_num===5&&parseInt(user_score.textContent)>parseInt(c_score.textContent)){
                alert("user won")
            }
            else if(r_num===5&&parseInt(user_score.textContent)===parseInt(c_score.textContent)){
                alert("its a tie")
            }

            else if(r_num===5&&parseInt(user_score.textContent)<parseInt(c_score.textContent)){
                alert("computer won")
            }

        } else {
            // console.log("Computer wins!");
            let r_num=parseInt(round_number.textContent)
            r_num+=1;
            round_number.textContent=r_num
            let comp_score=parseInt(c_score.textContent);
            comp_score+=1
            c_score.textContent=comp_score
            if(r_num===5&&parseInt(user_score.textContent)>parseInt(c_score.textContent)){
                alert("user won")
            }
            else if(r_num===5&&parseInt(user_score.textContent)===parseInt(c_score.textContent)){
                alert("its a tie")
            }

            else if(r_num===5&&parseInt(user_score.textContent)<parseInt(c_score.textContent)){
                alert("computer won")
            }

        }
    }

    // Add event listeners correctly
    document.querySelector(".rock").addEventListener("click", () => getComputerScore(0));
    document.querySelector(".paper").addEventListener("click", () => getComputerScore(1));
    document.querySelector(".scissors").addEventListener("click", () => getComputerScore(2));
});
