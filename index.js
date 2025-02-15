document.addEventListener("DOMContentLoaded",()=>{

    // const play_btn=document.querySelector(".playbtn")
    
    // play_btn.addEventListener("click",()=>{
        const round_num=document.querySelector(".round_number")
        let num=parseInt(round_num.textContent)
        num+=1;
        round_num.textContent=num
        function computerChance(x){
                const a=Math.floor(Math.random()*3)
                // if(x===0&&a===0||x===1&&a===1||x===2&&a===2){
                //        continue;
                //     }
                //     else 
                    if((x===0&&a===2)||(x===1&&a===0)||(x===2&&x===1)){
                       const user_score= document.querySelector(".user_score")
                     let u_score=parseInt(user_score.textContent)
                     u_score+=1
                     user_score.textContent=u_score
                    }
                    else{
                        const computer_score=document.querySelector(".computer_score")
                        let c_score=parseInt(computer_score.textContent)
                        c_score+=1;
                        computer_score.textContent=c_score
                    }
                
            }
            const rock_btn=document.querySelector(".rock")
            rock_btn.addEventListener("click",computerChance(0))
            const paper_btn=document.querySelector(".paper")
            paper_btn.addEventListener("click",computerChance(1))
            const scissors=document.querySelector(".scissors")
            scissors.addEventListener("click",computerChance(2))
        }) 
    // })