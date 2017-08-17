
//   <!--Create Variables-->
  var crystalcount = {
      generatenumber:0,
      redcrystal:0,
      greencrystal:0,
      bluecrystal:0,
      whitecrystal:0,
      wins:0,
      losses:0,
      count:0,
  }
//  randomnumber function
  $(document).ready(function() {
    function random(max,min){
      return Math.floor(Math.random()*(max-min+1))+min;
    }
//score
    function score(){
      // console.log(crystalcount.count);
      // console.log(crystalcount.generatenumber);
      if(crystalcount.count== crystalcount.generatenumber){
        crystalcount.wins++;
        $('#win').text(crystalcount.wins);
        // $(crystalcount.generatenumber).empty();
        newgame();

      }
      else if(crystalcount.count > crystalcount.generatenumber)
      {
        crystalcount.losses++;
        $('#loss').text(crystalcount.losses);
        newgame();
      }
      // return score();
    }
    //newgame
    function newgame(){
      crystalcount.generatenumber= random(120,18);
      $(".value").text(crystalcount.generatenumber);

      crystalcount.redcrystal=0;
      crystalcount.greencrystal=0;
      crystalcount.bluecrystal=0;
      crystalcount.whitecrystal=0;
      crystalcount.count=0;

    }
		//to generete randomnumberbtwn 18-120
  		crystalcount.generatenumber = random(120,18);
  		$(".value").text(crystalcount.generatenumber);

      $("#images1").on("click", function() {          
        if(crystalcount.redcrystal==0){
       crystalcount.redcrystal=random(12,1);
         $("#redcrystal").text($(this).text());
        }
        console.log(crystalcount.redcrystal);
        crystalcount.count=crystalcount.count+crystalcount.redcrystal;
        $("#yourScore").text(crystalcount.count);
        console.log(crystalcount.count);
        score();
        });
        $("#images2").on("click", function() {
         if(crystalcount.whitecrystal==0){
        crystalcount.whitecrystal=random(12,1);
        $("#whitecrystal").text($(this).text());
         }
          console.log(crystalcount.whitecrystal);
          // console.log(crystalcount.count);
          crystalcount.count=crystalcount.count+crystalcount.whitecrystal;
          $("#yourScore").text(crystalcount.count);
          console.log(crystalcount.count);
          score();
        });
  $("#images3").on("click", function() {

     if(crystalcount.bluecrystal==0) {
      crystalcount.bluecrystal=random(12,1);
      $("#bluecrystal").text($(this).text());
    }
      console.log( crystalcount.bluecrystal);
      crystalcount.count=crystalcount.count+crystalcount.bluecrystal;
      $("#yourScore").text(crystalcount.count);
      console.log(crystalcount.count);
      score();
    });
  $("#images4").on("click", function() {

     if(crystalcount.greencrystal==0) {

     crystalcount.greencrystal=random(12,1);
      $("#greencrystal").text($(this).text());
    }
      console.log(crystalcount.greencrystal);
      crystalcount.count=crystalcount.count+crystalcount.greencrystal;
      $("#yourScore").text(crystalcount.count);
      console.log(crystalcount.count);
      score();
    });

 		 
  });
  	
