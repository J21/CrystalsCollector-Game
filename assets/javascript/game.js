$( document ).ready(function(){
	//The computer selects a random number between 19-120
  var randNumber = Math.floor(Math.random()*101+19)
  //This statement appends the selected number to the cariable "selectNumber"
  $('#selectNumber').text(randNumber);
  // Appending random number to the randomNumber id in the html doc
  //
  //The following four statements set up random numbers for each jewel
  //Some jewels are 1-12, others -10-10, one will always be negative.
  var jewel1= Math.floor(Math.random()*11+1);
  var jewel2= Math.floor(Math.random()*11+1);
  var jewel3= Math.floor(Math.random()*11+1);
  var jewel4= Math.floor(Math.random()*9+1);
  jewel4 *= Math.floor(Math.random()*2) == 1 ? 1 : -1; 
  var jewel5= Math.floor(Math.random()*9+1);
  jewel5 *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
  var jewel6= Math.floor(Math.random()*-13+1);
  //Sets up the score 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
$('#Wins').text(wins);
$('#Losses').text(losses);

//resets the game
function resetGame(){
      randNumber=Math.floor(Math.random()*101+19);
      console.log(randNumber)
      $('#selectNumber').text(randNumber);
     var jewel1= Math.floor(Math.random()*11+1);
     var jewel2= Math.floor(Math.random()*11+1);
     var jewel3= Math.floor(Math.random()*11+1);
     var jewel4= Math.floor(Math.random()*9+1);
     jewel4 *= Math.floor(Math.random()*2) == 1 ? 1 : -1; 
     var jewel5= Math.floor(Math.random()*9+1);
     jewel5 *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
     var jewel6= Math.floor(Math.random()*-13+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//adds the wins to the userTotal
function w(){
alert("You won!");
  wins++; 
  $('#Wins').text(wins);
  resetGame();
}
//addes the losses to the userTotal
function l(){
alert ("You lose!");
  losses++;
  $('#Losses').text(losses);
  resetGame();
}
//sets up click for jewels
  $('#one').on('click', function(){
    userTotal = userTotal + jewel1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == randNumber){
          w();
        }
        else if ( userTotal > randNumber){
          l();
        }   else if (userTotal < 0){
        	l();
        }
  })  
  $('#two').on('click', function(){
    userTotal = userTotal + jewel2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == randNumber){
          w();
        }
        else if ( userTotal > randNumber){
          l();
        } else if (userTotal < 0){
        	l();
        }
  })  
  $('#three').on('click', function(){
    userTotal = userTotal + jewel3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == randNumber){
          w();
        }
        else if ( userTotal > randNumber){
          l();
        } else if (userTotal < 0){
        	l();
        }
  })  
  $('#four').on('click', function(){
    userTotal = userTotal + jewel4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == randNumber){
          w();
        }
        else if ( userTotal > randNumber){
          l();
        }else if (userTotal < 0){
        	l();
        }
  });  
   $('#five').on('click', function(){
    userTotal = userTotal + jewel5;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == randNumber){
          w();
        }
        else if ( userTotal > randNumber){
          l();
        }else if (userTotal < 0){
        	l();
        }
  });  
    $('#six').on('click', function(){
    userTotal = userTotal + jewel6;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == randNumber){
          w();
        }
        else if ( userTotal > randNumber){
          l();
        } else if (userTotal < 0){
        	l();
        }
  }); 
}); 