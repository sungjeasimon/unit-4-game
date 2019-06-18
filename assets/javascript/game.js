$(document).ready(function() {

    var RandomNum=Math.floor(Math.random()*50+10)
    $("#scoreToMatch").text(RandomNum);
    
    var crystalR= Math.floor(Math.random()*10+1)
    var crystalB= Math.floor(Math.random()*10+1)
    var crystalY= Math.floor(Math.random()*5+1)
    var crystalG= Math.floor(Math.random()*5+1)
    console.log("Red: " + crystalR, "Blue: " + crystalB, "Yellow: " + crystalY, "Green: " + crystalG);
    
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
  
    $("#wins").text(wins);
    $("#losses").text(losses);
  
    function winner(){
        wins++; 
        $("#wins").text(wins);
        reset();
    }
  
    function loser(){
        losses++;
        $("#losses").text(losses);   
        reset();
    }
  
    $(".red").on ('click', function(){
      playerTotal = playerTotal + crystalR;
      $("#totalScore").text(playerTotal); 

    if (playerTotal === RandomNum){
        winner();
    }
    else if ( playerTotal > RandomNum){
        loser();
    }   
    });
    
    $(".blue").on ('click', function(){
      playerTotal = playerTotal + crystalB;
      $("#totalScore").text(playerTotal); 
          if (playerTotal == RandomNum){
            winner();
          }
          else if ( playerTotal > RandomNum){
            loser();
          } 
    });

    $(".yellow").on ('click', function(){
      playerTotal = playerTotal + crystalY;
      $("#totalScore").text(playerTotal);
  
            if (playerTotal === RandomNum){
            winner();
          }
          else if ( playerTotal > RandomNum){
            loser();
          } 
    });

    $(".green").on ('click', function(){
      playerTotal = playerTotal + crystalG;
      $("#totalScore").text(playerTotal); 
        
            if (playerTotal === RandomNum){
            winner();
          }
          else if ( playerTotal > RandomNum){
            loser();
          }
    }); 
    
    function reset(){
        RandomNum=Math.floor(Math.random()*50+10);
        $("#scoreToMatch").text(RandomNum);
        crystalR= Math.floor(Math.random()*10+1);
        crystalB= Math.floor(Math.random()*10+1);
        crystalY= Math.floor(Math.random()*5+1);
        crystalG= Math.floor(Math.random()*5+1);
        playerTotal= 0;
        $("#totalScore").text(playerTotal);
    } 

  }); 