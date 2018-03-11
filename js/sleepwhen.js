$(document).ready(function() {
$(document).machine({
   // stateOne
   stateOne: {
      defaultState: true,
      onEnter: function() {
   $('#one'   ).html(		"Wind barely blew against the house"); //stateThree
 	 $('#two'   ).html(		"The entrance was cool and quiet"); //stateFour
	 $('#three' ).html(		"I went into the bedroom"); //stateTwo
      },
      events: {
   "click #one": 			"stateThree",
	 "click #two": 			"stateFour",
	 "click #three": 		"stateTwo",
      },
   },
   //stateTwo
   stateTwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The bedroom was very dark"); //stateFive
	 $('#two'   ).html(		"Maria was lying on the bed"); //stateSix
	 $('#three' ).html(		"I was drowsy"); //stateSeven
      },
      events: {
   "click #one": 			"stateFive",
	 "click #two": 			"stateSix",
	 "click #three": 		"stateSeven",
      },
   },
   //stateThree
   stateThree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The power must have gone out"); //stateEight
	 $('#two'   ).html(		"I took off my shoes"); //stateNine
	 $('#three' ).html(		"I went toward the kitchen"); //stateTen
      },
      events: {
   "click #one": 			"stateEight",
	 "click #two": 			"stateTen",
	 "click #three": 		"stateNine",
      },
   },
   //stateFour
   stateFour: {
      onEnter: function( evt, previousState ) {

   $('#one'   ).html(		"We had left the electric piano on"); //stateEleven
	 $('#two'   ).html(		"I leaned against the front window"); //stateTwelve
	 $('#three' ).html(		"Letters for me on the coffee table"); //stateTwohundredseven
      },
      events: {
   "click #one": 			"stateEleven",
	 "click #two": 			"stateTwelve",
	 "click #three": 		"stateTwohundredseven",
      },
   },
   //stateFive
   stateFive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"A light coming in from outside"); //stateFifteen
	 $('#three' ).html(		"I went into the en suite"); //stateSixteen
      },
      events: {
	 "click #two": 			"stateFifteen",
	 "click #three": 		"stateSixteen",
      },
   },
   //stateSix
   stateSix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The bed was cold"); //stateSeventeen
	 $('#two'   ).html(		"I took off my clothes"); //stateEighteen
	 $('#three' ).html(		"I went to the window"); //stateNineteen
      },
      events: {
   "click #one": 			"stateSeventeen",
	 "click #two": 			"stateEighteen",
	 "click #three": 		"stateNineteen",
      },
   },
   //stateSeven
   stateSeven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I removed my watch"); //stateTwenty
	 $('#two'   ).html(		"Maria was fast asleep"); //stateTwentyone
	 $('#three' ).html(		"The light in our closet was on"); //stateTwentytwo
      },
      events: {
   "click #one": 			"stateTwenty",
	 "click #two": 			"stateTwentyone",
	 "click #three": 		"stateTwentytwo",
      },
   },
   //stateEight
   stateEight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"<p class='clock'><blink>12 : 00</blink></p>"); //stateOnehundredsix
	 $('#two'   ).html(		"<p class='clock'><blink>12 : 00</blink></p>"); //stateOnehundredsix
	 $('#three' ).html(		"<p class='clock'><blink>12 : 00</blink></p>"); //stateOnehundredsix
      },
      events: {
   "click #one": 			"stateOnehundredsix",
	 "click #two": 			"stateOnehundredsix",
	 "click #three": 		"stateOnehundredsix",
      },
   },
   //stateNine
   stateNine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Francis lying in the heat of the register"); //Twentyfour
	 $('#two'   ).html(		"The sink glowed from the neighbour's porch light"); //Twentyfive
	 $('#three' ).html(		"I opened the cupboard"); //Twentysix
      },
      events: {
   "click #one": 			"stateTwentyfour",
	 "click #two": 			"stateTwentyfive",
	 "click #three": 		"stateTwentysix",
      },
   },
   //stateTen
   stateTen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I turned on the light in the hallway"); //stateTwentyseven
	 $('#two'   ).html(		"I went into the kitchen"); // stateNine
	 $('#three' ).html(		"I put my shoes inside the front closet"); //stateTwentyeight
      },
      events: {
   "click #one": 			"stateTwentyseven",
	 "click #two": 			"stateNine",
	 "click #three": 		"stateTwentyeight",
      },
   },
   //stateEleven
   stateEleven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I sat at the piano bench"); //stateTwentynine
	 $('#two'   ).html(		"There was sheet music on the stand"); //stateThirty
	 $('#three' ).html(		"I turned down the volume"); //stateThirtyone
      },
      events: {
   "click #one": 			"stateTwentynine",
	 "click #two": 			"stateThirty",
	 "click #three": 		"stateThirtyone",
      },
   },
   //stateTwelve
   stateTwelve: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"An orange glow over the street"); //stateThirtytwo
	 $('#two'   ).html(		"Two teens stumbling home"); //stateThirtythree
	 $('#three' ).html(		"I leaned further against the windowsill"); //stateThirtyfour
      },
      events: {
   "click #one": 			"stateThirtytwo",
	 "click #two": 			"stateThirtythree",
	 "click #three": 		"stateThirtyfour",
      },
   },
   //stateThirteen
   stateThirteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"You're qualified for something"); //stateThirtyfive
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"A postcard"); //stateThirtyseven
      },
      events: {
   "click #one": 			"stateThirtyfive",
	 "click #three": 		"stateThirtyseven",
      },
   },
   //stateFourteen
   stateFourteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"A last minute housewarming party"); //stateThirtyeight
	 $('#two'   ).html(		"at Derek's new house past the lake"); //stateThirtynine
	 $('#three' ).html(		"Everyone from work work was there"); //stateForty
      },
      events: {
   "click #one": 			"stateThirtyeight",
	 "click #two": 			"stateThirtynine",
	 "click #three": 		"stateForty",
      },
   },
   //stateFifteen, from "There was light outside"
   stateFifteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"An orange glow over the houses"); //Thirtytwo
	 $('#two'   ).html(		"A neighbour's porch light"); // Twentyfive
	 $('#three' ).html(		"I was pretty bored"); //stateFortyone
      },
      events: {
   "click #one": 			"stateThirtytwo",
	 "click #two": 			"stateTwentyfive",
	 "click #three": 		"stateFortyone",
      },
   },
   //stateSixteen, "I went into the en suite"
   stateSixteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Here was my toothbrush"); //stateFortytwo
	 $('#two'   ).html(		"I smoothed my hair back"); //stateFortythree
	 $('#three' ).html(		"A note taped to the mirror"); //stateFortyfour
      },
      events: {
   "click #one": 			"stateFortytwo",
	 "click #two": 			"stateFortythree",
	 "click #three": 		"stateFortyfour",
      },
   },
   //stateSeventeen "The bed was cold"...
   stateSeventeen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Maria was cold"); //stateFortyfive
	 $('#two'   ).html(		"The pillow was cold"); //stateFortysix
	 $('#three' ).html(		"I undressed and was cold"); //stateEighteen
      },
      events: {
   "click #one": 			"stateFortyfive",
	 "click #two": 			"stateFortysix",
	 "click #three": 		"stateEighteen",
      },
   },
   //stateEighteen
   stateEighteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I removed my watch"); //stateTwohundredeight
	 $('#two'   ).html(		"I checked my phone"); //stateFortyseven
	 $('#three' ).html(		"The sheets were cold"); //stateFortysix
      },
      events: {
   "click #one": 			"stateTwohundredeight",
	 "click #two": 			"stateFortyseven",
	 "click #three": 		"stateFortysix",
      },
   },
   //stateNineteen
   stateNineteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"An orange glow over the houses"); //stateThirtytwo
	 $('#two'   ).html(		"A neighbour's porch light"); //stateTwentyfive
	 $('#three' ).html(		"My forehead against the window"); //stateFortynine
      },
      events: {
   "click #one": 			"stateThirtytwo",
	 "click #two": 			"stateTwentyfive",
	 "click #three": 		"stateFortynine",
      },
   },
   //stateTwenty
   stateTwenty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"<p class='clock'>3<blink> : </blink>02</p>"); //stateFifty
	 $('#two'   ).html(		""); //stateFifty
	 $('#three' ).html(		""); //stateFifty
      },
      events: {
   "click #one": 			"stateFifty",
      },
   },
   //stateTwentyone
   stateTwentyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I smoothed her hair back"); //stateFiftyone
	 $('#two'   ).html(		"I kissed her cheek"); //stateFiftytwo
	 $('#three' ).html(		"I watched her sleep"); //stateFiftythree
      },
      events: {
   "click #one": 			"stateFiftyone",
	 "click #two": 			"stateFiftytwo",
	 "click #three": 		"stateFiftythree",
      },
   },
   //stateTwentytwo
   stateTwentytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I put away my shirt"); //stateFiftyfive
	 $('#two'   ).html(		"I hung my pants on the closet door"); //stateFiftyfive
	 $('#three' ).html(		"I took off my socks"); //stateFiftyfive
      },
      events: {
   "click #one": 			"stateFiftyfive",
	 "click #two": 			"stateFiftyfive",
	 "click #three": 		"stateFiftyfive",
      },
   },
   //stateTwentyfour
   stateTwentyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Francis stretched out on his side"); //stateSixty
	 $('#two'   ).html(		"bored, the heat beating against him"); //stateSixtyone
	 $('#three' ).html(		"half asleep"); //stateSixtytwo
      },
      events: {
   "click #one": 			"stateSixty",
	 "click #two": 			"stateSixtyone",
	 "click #three": 		"stateSixtytwo",

      },
   },
   //stateTwentyfive
   stateTwentyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The light was bright"); //stateSixtythree
	 $('#two'   ).html(		"The light was boring"); //stateSixtyfour
	 $('#three' ).html(		"Orange light glowed boringly over the other houses"); //stateThirtytwo
      },
      events: {
   "click #one": 			"stateSixtythree",
	 "click #two": 			"stateSixtyfour",
	 "click #three": 		"stateThirtytwo",
      },
   },
   //stateTwentysix
   stateTwentysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I took a glass"); //stateSixtysix
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSixtysix",
      },
   },
   //stateTwentyseven
   stateTwentyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"A new photograph was hanging"); //stateSixtyseven
	 $('#two'   ).html(		"The hall closet was open"); //stateSixtyeight
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSixtyseven",
	 "click #two": 			"stateSixtyeight",
      },
   },
   //stateTwentyeight
   stateTwentyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Was the front door locked"); //stateSixtynine
	 $('#two'   ).html(		"I went into the kitchen"); //stateNine
	 $('#three' ).html(		"I checked my phone"); //stateFortyseven
      },
      events: {
   "click #one": 			"stateSixtynine",
	 "click #two": 			"stateNine",
	 "click #three": 		"stateFortyseven",
      },
   },
   //stateTwentynine, from "I sat down"
   stateTwentynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"All right, a few notes"); //stateSeventy
	 $('#two'   ).html(		"There was sheet music on the stand"); //stateThirty
	 $('#three' ).html(		"I had forgotten about all the cool tones"); //stateSeventyone
      },
      events: {
   "click #one": 			"stateSeventy",
	 "click #two": 			"stateThirty",
	 "click #three": 		"stateSeventyone",
      },
   },
   //stateThirty
   stateThirty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"It was page four of something"); //stateSeventytwo
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSeventytwo",
      },
   },
   //stateThirtyone
   stateThirtyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"All right, a few notes"); //stateSeventy
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSeventy",
      },
   },
   //stateThirtytwo
   stateThirtytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"A glow washing over me"); //stateSeventythree
	 $('#two'   ).html(		"A glow boring everyone still awake"); //stateSeventythree
	 $('#three' ).html(		"And yeah"); //stateSeventyfive
      },
      events: {
   "click #one": 			"stateSeventythree",
	 "click #two": 			"stateSeventythree",
	 "click #three": 		"stateSeventyfive",
      },
   },
   //stateThirtythree
   stateThirtythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Drunk and young"); //stateSeventysix
	 $('#two'   ).html(		"In love probably"); //stateSeventyseven
	 $('#three' ).html(		"Her wearing his hat"); //stateSeventyeight
      },
      events: {
   "click #one": 			"stateSeventysix",
	 "click #two": 			"stateOnehundredseventytwo",
	 "click #three": 		"stateSeventyeight",
      },
   },
   //stateThirtyfour
   stateThirtyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"An orange glow"); //stateThirtytwo
	 $('#two'   ).html(		"Some teens"); //stateThirtythree
	 $('#three' ).html(		"I leaned against"); //stateSeventynine
      },
      events: {
   "click #one": 			"stateThirtytwo",
	 "click #two": 			"stateThirtythree",
	 "click #three": 		"stateSeventynine",
      },
   },
   //stateThirtyfive
   stateThirtyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Dear sir/madam"); //stateEighty
	 $('#two'   ).html(		"Do you like this credit card"); //stateEighty
	 $('#three' ).html(		"Here, look at this credit card"); //stateEightyone
      },
      events: {
   "click #one": 			"stateEighty",
	 "click #two": 			"stateEighty",
	 "click #three": 		"stateEightyone",
      },
   },
   //stateThirtyseven
   stateThirtyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Dear Lucas,"); //stateEightyfive
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateEightyfive",
      },
   },
   //stateThirtyeight
   stateThirtyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The house was warm and"); //stateEightysix
	 $('#two'   ).html(		"out past the lake"); //stateEightyseven
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateEightysix",
	 "click #two": 			"stateEightyseven",
      },
   },
   //stateThirtynine
   stateThirtynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"There were many other guests"); //stateEightyeight
	 $('#two'   ).html(		"There were stairs that led up to the bedrooms"); //stateEightynine
	 $('#three' ).html(		"There was a narrow hall that led to the bathroom"); //stateNinety
      },
      events: {
   "click #one": 			"stateEightyeight",
	 "click #two": 			"stateEightynine",
	 "click #three": 		"stateNinety",
      },
   },
   //stateForty
   stateForty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Jen and Curtis and Lindsay"); //stateNinetyone
	 $('#two'   ).html(		"Morgan and Adam and"); //stateNinetyone
	 $('#three' ).html(		"people I didn't know"); //stateNinetyone
      },
      events: {
   "click #one": 			"stateNinetyone",
	 "click #two": 			"stateNinetyone",
	 "click #three": 		"stateNinetyone",
      },
   },
   //stateFortyone
   stateFortyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"Sunrise was at 5:11"); //stateOnehundredfortythree
      },
      events: {
	 "click #three": 		"stateOnehundredfortythree",
      },
   },
   //stateFortytwo
   stateFortytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I brushed my teeth twice a day for at least two minutes"); //stateNinetytwo
	 $('#two'   ).html(		"I smoothed my hair back"); //stateFortythree
	 $('#three' ).html(		"A note taped to the mirror"); //stateFortyfour
      },
      events: {
   "click #one": 			"stateNinetytwo",
	 "click #two": 			"stateFortythree",
	 "click #three": 		"stateFortyfour",
      },
   },
   //stateFortythree
   stateFortythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"My hair needed to be washed"); //stateNinetythree
	 $('#two'   ).html(		"It had been a long and boring day"); //stateNinetyfour
	 $('#three' ).html(		"A note taped to the mirror"); //stateFortyfour
      },
      events: {
   "click #one": 			"stateNinetythree",
	 "click #two": 			"stateNinetyfour",
	 "click #three": 		"stateFortyfour",
      },
   },
   //stateFortyfour
   stateFortyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Leaving early tomorrow morning"); //stateNinetyfive
	 $('#two'   ).html(		"for the wedding,"); //stateNinetyfive
	 $('#three' ).html(		"remember? I love you"); //stateNinetysix
      },
      events: {
   "click #one": 			"stateNinetyfive",
	 "click #two": 			"stateNinetyfive",
	 "click #three": 		"stateNinetysix",
      },
   },
   //stateFortyfive
   stateFortyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Maria's arms were cold"); //stateNinetyeight
	 $('#two'   ).html(		"Maria's shoulders were cold"); //stateNinetyeight
	 $('#three' ).html(		"Maria's ears were warm"); //stateNinetyeight
      },
      events: {
   "click #one": 			"stateNinetyeight",
	 "click #two": 			"stateNinetyeight",
	 "click #three": 		"stateNinetyeight",
      },
   },
   //stateFortysix
   stateFortysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The sheets were cold"); //stateNinetynine
	 $('#two'   ).html(		"I was cold"); //stateNinetynine
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateNinetynine",
	 "click #two": 			"stateNinetynine",
      },
   },
   //stateFortyseven
   stateFortyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"3 new messages"); //stateOnehundred
	 $('#two'   ).html(		"1 new voicemail"); //stateOnehundredone
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundred",
	 "click #two": 			"stateOnehundredone",
      },
   },
   //stateFortynine
   stateFortynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"My forehead"); //stateFortyeight
	 $('#two'   ).html(		"against"); //stateFortyeight
	 $('#three' ).html(		"the window"); //stateFortyeight
      },
      events: {
   "click #one": 			"stateFortyeight",
	 "click #two": 			"stateFortyeight",
	 "click #three": 		"stateFortyeight",
      },
   },
   //stateFortyeight
   stateFortyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"My forehead"); //stateSeventeen
	 $('#two'   ).html(		"cold"); //stateFortynine
	 $('#three' ).html(		"the window"); //stateSeventeen
      },
      events: {
   "click #one": 			"stateSeventeen",
	 "click #two": 			"stateFortynine",
	 "click #three": 		"stateSeventeen",
      },
   },
   //stateFifty
   stateFifty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I put it on the bedside table"); //stateNinetynine
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateNinetynine",
      },
   },
   //stateFiftyone
   stateFiftyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I kissed her cheek"); //stateFiftytwo
	 $('#three' ).html(		"I watched her sleep"); //stateFiftythree
      },
      events: {
	 "click #two": 			"stateFiftytwo",
	 "click #three": 		"stateFiftythree",
      },
   },
   //stateFiftytwo
   stateFiftytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"She had probably been sleeping for a long time"); //stateOnehundredfour
	 $('#three' ).html(		"");
},
      events: {
	 "click #two": 		"stateOnehundredfour",
      },
   },
   //stateFiftythree
   stateFiftythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I almost started to sleep"); //stateOnehundredfive
	 $('#two'   ).html(		"but was too bored and not sleepy enough"); //stateOnehundredfive
	 $('#three' ).html(		"I fell into a trance of bored and not doing"); //stateEnd
      },
      events: {
   "click #one": 			"stateOnehundredfive",
	 "click #two": 			"stateOnehundredfive",
	 "click #three": 		"stateEnd",
      },
   },
   //stateFiftyfive
   stateFiftyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"etc."); //stateFiftysix
      },
      events: {
	 "click #three": 		"stateFiftysix",
      },
   },
   //stateFiftysix
   stateFiftysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"All of my clothes"); //stateNinetynine
	 $('#two'   ).html(		"I closed the closet door"); //stateNinetynine
	 $('#three' ).html(		"I was bored and tired and normal"); //stateTwohundredthree
      },
      events: {
   "click #one": 			"stateNinetynine",
	 "click #two": 			"stateNinetynine",
	 "click #three": 		"stateTwohundredthree",
      },
   },
   //stateSixty
   stateSixty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Francis almost always"); //stateOnehundredeight
	 $('#two'   ).html(		"just bored and lying around"); //stateOnehundrednine
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredeight",
	 "click #two": 			"stateOnehundrednine",
      },
   },
   //stateSixtyone
   stateSixtyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Francis loved to be bored"); //stateOnehundrednine
	 $('#two'   ).html(		"in the heat from the register"); //stateOnehundrednine
	 $('#three' ).html(		"")
      },
      events: {
   "click #one": 			"stateOnehundredten",
	 "click #two": 			"stateOnehundredten",
      },
   },
   //stateSixtytwo
   stateSixtytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"Me half asleep but not able to sleep"); //stateOnehundredeleven
      },
      events: {
	 "click #three": 		"stateOnehundredeleven",
      },
   },
   //stateSixtythree
   stateSixtythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The neighbours were long asleep"); //stateOnehundredtwelve
	 $('#two'   ).html(		"I met them once"); //stateOnehundredthirteen
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredtwelve",
	 "click #two": 			"stateOnehundredthirteen",
      },
   },
   //stateSixtyfour
   stateSixtyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"And consistent and boring"); //stateSixtyfive
	 $('#two'   ).html(		"like that boring orange glow"); //stateSixtyfive
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSixtyfive",
	 "click #two": 			"stateSixtyfive",
      },
   },
   //stateSixtyfive
   stateSixtyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Every night an orange glow"); //stateThirtytwo
	 $('#two'   ).html(		"The houses lived in an orange glow"); //stateEnd
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateThirtytwo",
	 "click #two": 			"stateEnd",
      },
   },
   //stateSixtysix
   stateSixtysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I filled the glass with water"); //stateOnehundredfourteen
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I was wary of the listening abilities of water"); //stateTwohundredfive
      },
      events: {
   "click #one": 			"stateOnehundredfourteen",
         "click #three":		"stateTwohundredfive",
      },
   },
   //stateSixtyseven
   stateSixtyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Maria and I at Stanley Park"); //stateOnehundredfifteen
	 $('#two'   ).html(		"A little bridge"); //stateOnehundredsixteen
	 $('#three' ).html(		"The orange glow of sunset"); //stateOnehundredseventeen
      },
      events: {
   "click #one": 			"stateOnehundredfifteen",
	 "click #two": 			"stateOnehundredsixteen",
	 "click #three": 		"stateOnehundredseventeen",
      },
   },
   //stateSixtyeight
   stateSixtyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The vacuum"); //stateOnehundredeighteen
	 $('#two'   ).html(		"The Christmas lights"); //stateOnehundrednineteen
	 $('#three' ).html(		"The spare parts boring whatever"); //stateOnehundredtwenty
      },
      events: {
   "click #one": 			"stateOnehundredeighteen",
	 "click #two": 			"stateOnehundrednineteen",
	 "click #three": 		"stateOnehundredtwenty",
      },
   },
   //stateSixtynine
   stateSixtynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Yeah"); //stateOnehundredtwentyone
	 $('#two'   ).html(		"I went into the kitchen"); //stateNine
	 $('#three' ).html(		"I checked my phone"); //stateFortyseven
      },
      events: {
   "click #one": 			"stateOnehundredtwentyone",
	 "click #two": 			"stateNine",
	 "click #three": 		"stateFortyseven",
      },
   },
   //stateSeventy
   stateSeventy: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"A few more"); //stateOnehundredtwentytwo
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredtwentytwo",
      },
   },
   //stateSeventyone
   stateSeventyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Electric piano"); //stateOnehundredtwentythree
	 $('#two'   ).html(		"Ballpark organ"); //stateOnehundredtwentyfour
	 $('#three' ).html(		"Exciting trumpet"); //stateOnehundredtwentyfive
      },
      events: {
   "click #one": 			"stateOnehundredtwentythree",
	 "click #two": 			"stateOnehundredtwentyfour",
	 "click #three": 		"stateOnehundredtwentyfive",
      },
   },
   //stateSeventytwo
   stateSeventytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Nocturne Op. 9 No. 1"); //stateOnehundredtwentysix
	 $('#two'   ).html(		"Like I can play that shit"); //stateOnehundredtwentysix
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredtwentysix",
	 "click #two": 			"stateOnehundredtwentysix",
      },
   },
   //stateSeventythree
   stateSeventythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I looked down at the street"); //stateSeventyfour
	 $('#two'   ).html(		"and the street glowed orange"); //stateSeventyfour
 	 $('#three' ).html(		"and I thought: this is nice but boring"); //stateSeventyfour
      },
      events: {
   "click #one": 			"stateSeventyfour",
	 "click #two": 			"stateSeventyfour",
	 "click #three": 		"stateSeventyfour",
      },
   },
   //stateSeventyfour
   stateSeventyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"And I didn't know how to not be bored"); //stateOnehundredeightyone
	 $('#two'   ).html(		"And the outside called me outside"); //stateOnehundredeightyone
	 $('#three' ).html(		"and I went toward outside"); //stateOnehundredtwentyseven
      },
      events: {
   "click #one": 			"stateOnehundredeightyone",
	 "click #two":			"stateOnehundredeightyone",
	 "click #three": 		"stateOnehundredtwentyseven",
      },
   },
   //stateSeventyfive
   stateSeventyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Yeah yeah yeah"); //stateOnehundredtwentyeight
	 $('#two'   ).html(		"yeah yeah yeah yeah"); //stateOnehundredtwentyeight
	 $('#three' ).html(		"whatever"); //stateOnehundredtwentynine
      },
      events: {
   "click #one": 			"stateOnehundredtwentyeight",
	 "click #two": 			"stateOnehundredtwentyeight",
	 "click #three": 		"stateOnehundredtwentynine",
      },
   },
   //stateSeventysix
   stateSeventysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Was I drunk or"); //stateOnehundredthirty
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredthirty",
      },
   },
   //stateSeventyseven
   stateSeventyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I thought about Maria"); //stateOnehundredthirty
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateOnehundredthirty",
      },
   },
   //stateSeventyeight
   stateSeventyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Him wearing her sweater"); //stateOnehundredthirtytwo
	 $('#two'   ).html(		"Her not wearing shoes"); //stateOnehundredthirtytwo
	 $('#three' ).html(		"In love and walking and drunk"); //stateOnehundredthirtyone
      },
      events: {
   "click #one": 			"stateOnehundredthirtytwo",
	 "click #two": 			"stateOnehundredthirtytwo",
	 "click #three": 		"stateOnehundredthirtyone",
      },
   },
   //stateSeventynine
   stateXXX: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Was I drunk"); //stateOnehundredthirtythree
	 $('#two'   ).html(		"on the bathroom floor"); //stateOnehundredthirtythree
	 $('#three' ).html(		"I leaned against"); //stateOnehundredthirtythree
      },
      events: {
   "click #one": 			"stateOnehundredthirtythree",
	 "click #two": 			"stateOnehundredthirtythree",
	 "click #three": 		"stateOnehundredthirtythree",
      },
   },
   //stateEighty
   stateEighty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"In fact can you read this"); //stateOnehundredthirtyfour
	 $('#two'   ).html(		"You are pretty drunk"); //stateOnehundredthirtyfour
	 $('#three' ).html(		"The drunk of all to read"); //stateOnehundredthirtyfour
      },
      events: {
   "click #one": 			"stateOnehundredthirtyfour",
	 "click #two": 			"stateOnehundredthirtyfour",
	 "click #three": 		"stateOnehundredthirtyfour",
      },
   },
   //stateEightyone
   stateEightyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"John Smith"); //stateOnehundredthirtyone
	  },
      events: {
	 "click #three": 		"stateOnehundredthirtyone",
      },
   },
   //stateEightytwo
   stateEightytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"etc."); //stateEightythree
      },
      events: {
         "click #three": 		"stateEightythree",
      },
   },
   //stateEightythree
   stateEightythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"A postcard"); //stateThirtyseven
      },
      events: {
	 "click #three": 		"stateThirtyseven",
      },
   },
   //stateEightyfive
   stateEightyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I hope you're feeling well. What have you been up to?"); //stateEightyfour
	 $('#two'   ).html(		"Right now I am in New Zealand. It is snowing here."); //stateEightyfour
	 $('#three' ).html(		"It has been snowing here for a long time. You'd love it."); //stateEightyfour
      },
      events: {
   "click #one": 			"stateEightyfour",
	 "click #two": 			"stateEightyfour",
	 "click #three": 		"stateEightyfour",
      },
   },
   //stateEightyfour
   stateEightyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"With love, Niko"); //stateTwohundredfour
      },
      events: {
	 "click #three": 		"stateTwohundredfour",
      },
   },
   //stateEightysix
   stateEightysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The house hovered over the lake"); //stateOnehundredthirtysix
	 $('#two'   ).html(		"just past the cute little docks"); //stateOnehundredthirtysix
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredthirtysix",
	 "click #two": 			"stateOnehundredthirtysix",
      },
   },
   //stateEightyseven
   stateEightyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"From the living room I looked out over the lake"); //stateOnehundredthirtyseven
	 $('#two'   ).html(		"toward the city"); //stateOnehundredthirtyseven
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredthirtyseven",
	 "click #two": 			"stateOnehundredthirtyseven",
      },
   },
   //stateEightyeight
   stateEightyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I was offered wine and cheese"); //stateOnehundredthirtyeight
	 $('#two'   ).html(		"and various whiskeys"); //stateOnehundredthirtyeight
	 $('#three' ).html(		"some iced cream, etc."); //stateOnehundredthirtyeight
      },
      events: {
   "click #one": 			"stateOnehundredthirtyeight",
	 "click #two": 			"stateOnehundredthirtyeight",
	 "click #three": 		"stateOnehundredthirtyeight",
      },
   },
   //stateEightynine
   stateEightynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Derek's son's room"); //stateOnehundredthirtynine
	 $('#two'   ).html(		"The master bedroom"); //stateOnehundredforty
	 $('#three' ).html(		"The hallway"); //stateOnehundredfortyone
      },
      events: {
   "click #one": 			"stateOnehundredthirtynine",
	 "click #two": 			"stateOnehundredforty",
	 "click #three": 		"stateOnehundredfortyone",
      },
   },
   //stateNinety
   stateNinety: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I smoothed my hair back"); //stateFortythree
      },
      events: {
   "click #one": 			"",
	 "click #two": 			"",
	 "click #three": 		"stateFortythree",
      },
   },
   //stateNinetyone
   stateNinetyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"or were freelancers blah blah blah blah"); //stateOnehundredfortytwo
	 $('#two'   ).html(		"Look at all these boring freelancers"); //stateOnehundredfortytwo
	 $('#three' ).html(		"Shared boring office space and whatever"); //stateOnehundredfortytwo
      },
      events: {
   "click #one": 			"stateOnehundredfortytwo",
	 "click #two": 			"stateOnehundredfortytwo",
	 "click #three": 		"stateOnehundredfortytwo",
      },
   },
   //stateNinetytwo
   stateNinetytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I always brushed my teeth very well"); //stateOnehundredfortyfive
	 $('#two'   ).html(		"My teeth never gave me trouble and sometimes applauded me"); //stateOnehundredfortyfive
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredfortyfive",
	 "click #two": 			"stateOnehundredfortyfive",
      },
   },
   //stateNinetythree
   stateNinetythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"A note taped to the mirror"); //stateFortyfour
      },
      events: {
	 "click #three": 		"stateFortyfour",
      },
   },
   //stateNinetyfour
   stateNinetyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"But I was much too bored to just go to sleep"); //stateNinetyseven
      },
      events: {
	 "click #three": 		"stateNinetyseven",
      },
   },
   //stateNinetyfive
   stateNinetyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Laura and Daniel will be getting married"); //stateOnehundredfortysix
	 $('#two'   ).html(		"July the Seventeenth of the year Twenty-Fourteen"); //stateOnehundredfortysix
	 $('#three' ).html(		"First Baptist Church, Ottawa, Ontario, Canada"); //stateOnehundredfortysix
      },
      events: {
   "click #one": 			"stateOnehundredfortysix",
	 "click #two": 			"stateOnehundredfortysix",
	 "click #three":		"stateOnehundredfortysix",
      },
   },
   //stateNinetysix
   stateNinetysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I love you I love you I"); //stateOnehundredfortyseven
	 $('#two'   ).html(		"love you I love you I love"); //stateOnehundredfortyseven
	 $('#three' ).html(		"you I love you I love you"); //stateOnehundredfortyseven
      },
      events: {
   "click #one": 			"stateOnehundredfortyseven",
	 "click #two": 			"stateOnehundredfortyseven",
	 "click #three": 		"stateOnehundredfortyseven",
      },
   },
   //stateNinetyseven
   stateNinetyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I went to the bed"); //stateSeventeen
      },
      events: {
	 "click #three": 		"stateSeventeen",
      },
   },
   //stateNinetyeight
   stateNinetyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Maria's back was cold"); //stateOnehundredseventyfive
	 $('#two'   ).html(		"Maria's legs were cold"); //stateOnehundredseventysix
	 $('#three' ).html(		"Maria's toes were cold"); //stateOnehundredfortyeight
      },
      events: {
   "click #one": 			"stateOnehundredfortyeight",
	 "click #two": 			"stateOnehundredfortyeight",
	 "click #three": 		"stateOnehundredfortyeight",
      },
   },
   //stateNinetynine
   stateNinetynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I was bored and"); //stateOnehundredeleven
	 $('#two'   ).html(		"bored and tired and"); //stateOnehundredeleven
	 $('#three' ).html(		"drowsy and bored"); //stateOnehundredeleven
      },
      events: {
   "click #one": 			"stateOnehundredeleven",
	 "click #two": 			"stateOnehundredeleven",
	 "click #three": 		"stateOnehundredeleven",
      },
   },
   //stateOnehundred
   stateOnehundred: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Derek"); //stateOnehundredfortynine
	 $('#two'   ).html(		"Maria"); //stateOnehundredfifty
	 $('#three' ).html(		"Maria"); //stateOnhundredfiftyone
      },
      events: {
   "click #one": 			"stateOnehundredfortynine",
	 "click #two": 			"stateOnehundredfifty",
	 "click #three": 		"stateOnehundredfiftyone",
      },
   },
   //stateOnehundredone
   stateOnehundredone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Derek"); //stateOnehundredtwo
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredtwo",
      },
   },
   //stateOnehundredtwo
   stateOnehundredtwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Hey I didn't catch you"); //stateOnehundredthree
	 $('#two'   ).html(		"before you left I'm sorry man"); //stateOnehundredthree
	 $('#three' ).html(		"thanks so much for coming"); //stateOnehundredthree
      },
      events: {
   "click #one": 			"stateOnehundredthree",
	 "click #two": 			"stateOnehundredthree",
	 "click #three": 		"stateOnehundredthree",
      },
   },
   //stateOnehundredthree
   stateOnehundredthree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I love you"); //stateOnehundredfiftytwo
	 $('#two'   ).html(		"a great deal"); //stateOnehundredfiftytwo
	 $('#three' ).html(		"Have a safe drive"); //stateOnehundredfiftytwo
      },
      events: {
   "click #one": 			"stateOnehundredfiftytwo",
	 "click #two": 			"stateOnehundredfiftytwo",
	 "click #three": 		"stateOnehundredfiftytwo",
      },
   },
   //stateOnehundredfour
   stateOnehundredfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I really would have liked"); //stateFortyone
	 $('#two'   ).html(		"to be asleep but"); //stateFortyone
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateFortyone",
	 "click #two": 			"stateFortyone",
      },
   },
   //stateOnehundredfive
   stateOnehundredfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Lull of bored"); //stateNinetynine
	 $('#two'   ).html(		"lull of bored"); //stateNinetynine
	 $('#three' ).html(		"lull of bored"); //stateNinetynine
      },
      events: {
   "click #one": 			"stateNinetynine",
	 "click #two": 			"stateNinetynine",
	 "click #three": 		"stateNinetynine",
      },
   },
   //stateOnehundredsix
   stateOnehundredsix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I checked my phone"); //stateFortyseven
	 $('#two'   ).html(		"I checked my watch"); //stateOnehundredseven
	 $('#three' ).html(		"I went into the kitchen"); //stateNine
      },
      events: {
   "click #one": 			"stateFortyseven",
	 "click #two": 			"stateOnehundredseven",
	 "click #three": 		"stateNine",
      },
   },
   //stateOnehundredseven
   stateOnehundredseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"<p class='clock'>3<blink> : </blink>01</p>"); //stateTwenty
	 $('#two'   ).html(		"The party was still going on without me"); //stateFourteen
	 $('#three' ).html(		"I went to the bedroom"); //stateSix
      },
      events: {
   "click #one": 			"stateTwenty",
	 "click #two": 			"stateFourteen",
	 "click #three": 		"stateSix",
      },
   },
   //stateOnehundredeight
   stateOnehundredeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Francis bored bored"); //stateOnehundredten
	 $('#two'   ).html(		"Always bored and bored around"); //stateOnehundrednine
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredten",
	 "click #two": 			"stateOnehundrednine",
      },
   },
   //stateOnehundrednine
   stateOnehundrednine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"He squinted up at me"); //stateOnehundredten
	 $('#two'   ).html(		"and darted out the kitchen window"); //stateOnehundredten
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredten",
	 "click #two": 			"stateOnehundredten",
      },
   },
   //stateOnehundredten
   stateOnehundredten: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"There was that glow out the window"); //stateFifteen
	 $('#two'   ).html(		"I was drowsy but not tired"); //stateSixteen
	 $('#three' ).html(		"Everyone from work appeared to me"); //stateFourteen
      },
      events: {
   "click #one": 			"stateFifteen",
	 "click #two": 			"stateSixteen",
	 "click #three": 		"stateFourteen",
      },
   },
   //stateOnehundredeleven
   stateOnehundredeleven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Was I in the bedroom"); //stateOnehundredeightythree
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"or not in the bedroom"); //stateOnehundredeightyone
 },
      events: {
   "click #one": 			"stateOnehundredeightythree",
	 "click #two": 			"",
	 "click #three": 		"stateOnehundredeightyone",
      },
   },
   //stateOnehundredtwelve
   stateOnehundredwelve: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The neighbours were always long asleep"); //stateSixtythree
	 $('#two'   ).html(		"I met them once"); //stateOnehundredthirteen
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"statSixtythree",
	 "click #two": 			"stateOnehundredthirteen",
      },
   },
   //stateOnehundredthirteen
   stateOnehundredthirteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"Jim and Pam and little Douglas"); //stateSixtytwo
	 $('#three' ).html(		"All of them sound and sleeping and beautiful");
      },
      events: {
	 "click #two": 			"stateSixtytwo",
	 "click #three":		"stateSixtytwo",
      },
   },
   //stateOnehundredfourteen
   stateOnehundredfourteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I drank from the glass of water"); //stateFifty
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateFifty",
      },
   },
   //stateOnehundredfifteen
   stateOnehundredfifteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"This was one small memory"); //stateOnehundredfiftyfour
	 $('#two'   ).html(		"see also:"); //stateOnehundredfiftyfour
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredfiftyfour",
	 "click #two": 			"stateOnehundredfiftyfour",
      },
   },
   //stateOnehundredsixteen
   stateOnehundredsixteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Maria and I at Stanley Park"); //stateOnehundredfifteen
	 $('#two'   ).html(		"A little bridge for walking"); //stateOnehundredfiftyfive
	 $('#three' ).html(		"The orange glow of sunset"); //stateOnehundredseventeen
      },
      events: {
   "click #one": 			"stateOnehundredfifteen",
	 "click #two": 			"stateOnehundredfiftyfive",
	 "click #three": 		"stateOnehundredseventeen",
      },
   },
   //stateOnehundredseventeen
   stateOnehundredseventeen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"Orange glow of night"); //stateThirtytwo
      },
      events: {
	 "click #three":		"stateThirtytwo",
      },
   },
   //stateOnehundredeighteen
   stateOnehundredeighteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The vacuum (that I loved)"); //stateSixtyeight
	 $('#two'   ).html(		"The Christmas lights"); //stateSixtyeight
	 $('#three' ).html(		"The spare light bulbs"); //stateSixtyeight
	  },
      events: {
   "click #one": 			"stateSixtyEight",
	 "click #two": 			"stateSixtyeight",
	 "click #three": 		"stateSixtyeight",
      },
   },
   //stateOnehundrednineteen
   stateOnehundrednineteen: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The vacuum"); //stateOnehundredeighteen
	 $('#two'   ).html(		"The Christmas lights we didn't really use"); //stateOnehundredfiftysix
	 $('#three' ).html(		"The spare light bulbs"); //stateOnehundredtwenty
      },
      events: {
   "click #one": 			"stateOnehundredfiftysix",
	 "click #two": 			"stateOnehundredfiftysix",
	 "click #three": 		"stateOnehundredfiftysix",
      },
   },
   //stateOnehundredtwenty
   stateOnehundredtwenty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The vacuum");
	 $('#two'   ).html(		"The Christmas lights");
	 $('#three' ).html(		"The spare light bulbs (that I loved)");
	  },
      events: {
   "click #one": 			"stateSixtyeight",
	 "click #two": 			"stateOnehundredfiftysix",
	 "click #three": 		"stateSixtyeight",
      },
   },
   //stateOnehundredtwentyone
   stateOnehundredtwentyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I went into the kitchen"); //stateNine
	 $('#three' ).html(		"I checked my phone"); //stateFortyseven
      },
      events: {
	 "click #two": 			"stateNine",
	 "click #three": 		"stateFortyseven",
      },
   },
   //stateOnehundredtwentytwo
   stateOnehundredtwentytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Maybe I was too drunk"); //stateOnehundredfiftyseven
	 $('#two'   ).html(		"Maybe I was too bored"); //stateOnehundredfiftyseven
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredfiftyseven",
	 "click #two": 			"stateOnehundredfiftyseven",
      },
   },
   //stateOnehundredtwentythree
   stateOnehundredtwentythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Electric piano"); //stateOnehundredfiftyeight
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredfiftyeight",
      },
   },
   //stateOnehundredtwentyfour
   stateOnehundredtwentyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"Ballpark organ"); //stateOnehundredfiftynine
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateOnehundredfiftynine",
      },
   },
   //stateOnehundredtwentyfive
   stateOnehundredtwentyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"Exciting trumpet"); //stateOnehundredsixty
      },
      events: {
	 "click #three": 		"stateOnehundredsixty",
      },
   },
   //stateOnehundredtwentysix
   stateOnehundredtwentysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I went into the kitchen"); //stateNine
      },
      events: {
	 "click #three": 		"stateNine",
      },
   },
   //stateOnehundredtwentyseven
   stateOnehundredtwentyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The street"); //stateOnehundredsixtyone
	 $('#two'   ).html(		"seemed cold"); //stateOnehundredsixtyone
	 $('#three' ).html(		"and bored"); //stateOnehundredsixtyone
      },
      events: {
   "click #one": 			"stateOnehundredsixtyone",
	 "click #two": 			"stateOnehundredsixtyone",
	 "click #three": 		"stateOnehundredsixtyone",
      },
   },
   //stateOnehundredtwentyeight
   stateOnehundredtwentyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"It was obviously very late"); //stateTwenty
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I was exhausted but not able to sleep"); //stateOnehundredtwentynine
      },
      events: {
   "click #one": 			"stateTwenty",
	 "click #three": 		"stateOnehundredtwentynine",
      },
   },
   //stateOnehundredtwentynine
   stateOnehundredtwentynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I was in the bed"); //stateSeventysix
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateSeventysix",
      },
   },
   //stateOnehundredthirty
   stateOnehundredthirty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I wanted to find Maria");//stateOnehundredseventyfour
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateOnehundredseventyfour",
      },
   },
   //stateOnehundredthirtyone
   stateOnehundredthirtyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I turned on the hallway light"); //stateTwentyseven
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I went through the bedroom into the en suite"); //stateSixteen
      },
      events: {
   "click #one": 			"stateTwentyseven",
	 "click #three": 		"stateSixteen",
      },
   },
   //stateOnehundredthirtytwo
   stateOnehundredthirtytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Probably drunk"); //stateOnehundredthirty
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredthirty",
      },
   },
   //stateOnehundredthirtythree
   stateOnehundredthirtythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I leaned against"); //stateEighty
	 $('#two'   ).html(		"The bathroom floor"); //stateEighty
	 $('#three' ).html(		"To regain balance"); //stateEighty
      },
      events: {
   "click #one": 			"stateEighty",
	 "click #two": 			"stateEighty",
	 "click #three": 		"stateEighty",
      },
   },
   //stateOnehundredthirtyfour
   stateOnehundredthirtyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"What reading"); //stateOnehundredthirtyfive
	 $('#two'   ).html(		"Had I been reading"); //stateOnehundredthirtyfive
	 $('#three' ).html(		"Was I drunk or"); //stateOnehundredthirty
      },
      events: {
   "click #one": 			"stateOnehundredthirtyfive",
	 "click #two": 			"stateOnehundredthirtyfive",
	 "click #three": 		"stateOnehundredthirty",
      },
   },
   //stateOnehundredthirtyfive
   stateOnehundredthirtyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I remembered reading something"); //stateOnehundredthirtynine
	 $('#two'   ).html(		"But I didn't remember reading anything"); //stateSeventysix
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredthirtynine",
	 "click #two": 			"stateSeventysix",
      },
   },
   //stateOnehundredthirtysix
   stateOnehundredthirtysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Someone asked me:"); //stateOnehundredsixtytwo
	 $('#two'   ).html(		"Do you like bad music"); //stateOnehundredsixtytwo
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredsixtytwo",
	 "click #two": 			"stateOnehundredsixtytwo",
      },
   },
   //stateOnehundredthirtyseven
   stateOnehundredthirtyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I was always faux-seduced"); //stateOnehundredsixtyfour
	 $('#two'   ).html(		"by a city's hovery orange glow"); //stateOnehundredsixtyfour
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredsixtyfour",
	 "click #two": 			"stateOnehundredsixtyfour",
      },
   },
   //stateOnehundredthirtyeight
   stateOnehundredthirtyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The living room was long and wooden"); //stateEightysix
	 $('#two'   ).html(		"and filled with people"); //stateEightysix
	 $('#three' ).html(		"So cute"); //stateEightysix
      },
      events: {
   "click #one": 			"stateEightysix",
	 "click #two": 			"stateEightysix",
	 "click #three":		"stateEightysix",
      },
   },
   //stateOnehundredthirtynine
   stateOnehundredthirtynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Derek's son's room"); //stateOnehundredsixtythree
	 $('#two'   ).html(		"was yellow and warm"); //stateOnehundredsixtythree
	 $('#three' ).html(		"I found a book"); //stateOnehundredsixtythree
      },
      events: {
   "click #one": 			"stateOnehundredsixtythree",
	 "click #two": 			"stateOnehundredsixtythree",
	 "click #three": 		"stateOnehundredsixtythree",
      },
   },
 //stateOnehundredforty
 stateOnehundredforty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"It reminded me of our bedroom"); //stateOnehundredsixtyfive
	 $('#two'   ).html(		"but nicer, more spacious, more hardwood"); //stateOnehundredsixtyfive
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredsixtyfive",
	 "click #two": 			"stateOnehundredsixtyfive",
      },
   },
 //stateOnehundredfortyone
   stateOnehundredfortyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"It reminded me of my own hall"); //stateOnehundredsixtyfive
	 $('#two'   ).html(		"only longer and larger and more wooden"); //stateOnehundredsixtyfive
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredsixtyfive",
	 "click #two": 			"stateOnehundredsixtyfive",
      },
   },
 //stateOnehundredfortytwo
   stateOnehundredfortytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"It was really late"); //stateNine
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I went to the kitchen for some water"); //stateNine
      },
      events: {
   "click #one":			"stateNine",
	 "click #three": 		"stateNine",
      },
   },
   //stateOnehundredfortythree
   stateOnehundredfortythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"And a little bit later the day after that"); //stateOnehundredfortyfour
      },
      events: {
	 "click #three": 		"stateOnehundredfortyfour",
      },
   },
   //stateOnehundredfortyfour
   stateOnehundredfortyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"And a little bit later the day after that"); //stateOnehundredsixtysix
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateOnehundredsixtysix",
      },
   },
   //stateOnehundredfortyfive
   stateOnehundredfortyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"A note taped to the mirror") //stateFortyfour;
      },
      events: {
	 "click #three": 		"stateFortyfour",
      },
   },
   //stateOnehundredfortysix
   stateOnehundredfortysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I would not see Maria for another week"); //stateSeventyseven
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSeventyseven",
      },
   },
   //stateOnehundredfortyseven
   stateOnehundredfortyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I love you I love you"); //stateSeventyseven
	 $('#two'   ).html(		"Goodbye Have a good sleep"); //stateSeventyseven
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSeventyseven",
	 "click #two": 			"stateSeventyseven",
      },
   },
   //stateOnehundredfortyeight
   stateOnehundredfortyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Why was I"); //stateSeventysix
	 $('#two'   ).html(		"so warm"); //stateSeventysix
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSeventysix",
	 "click #two": 			"stateSeventysix",
      },
   },
   //stateOnehundredfortynine
   stateOnehundredfortynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Hey you still here"); //stateOnehundred
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundred",
      },
   },
   //stateOnehundredfifty
   stateOnehundredfifty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"ok i'm foing to bed now"); //stateOnehundred
	 $('#three' ).html(		"come home soon"); //stateOnehundred
      },
      events: {
	 "click #two": 			"stateOnehundred",
	 "click #three": 		"stateOnehundred",
      },
   },
   //stateOnehundredfiftyone
   stateOnehundredfiftyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"say hi to derek for me"); //stateTwentyone
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateTwentyone",
      },
   },
   //stateOnehundredfiftytwo
   stateOnehundredfiftytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"3 new messages"); //stateOnehundred
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundred",
      },
   },
   //stateOnehundredfiftythree
   stateOnehundredfiftythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The beach was warm and dry"); //stateOnehundredthirtythree
	 $('#two'   ).html(		"We swam toward a tiny island of sand"); //stateOnehundredthirtythree
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredthirtythree",
	 "click #two": 			"stateOnehundredthirtythree",
      },
   },
   //stateOnehundredfiftyfour
   stateOnehundredfiftyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Maria and Lucas go to the beach"); //stateOnehundredfiftythree
	 $('#two'   ).html(		"Maria and Lucas buy firecrackers"); //stateOnehundredsixtyseven
	 $('#three' ).html(		"Being bored and tired but unable to sleep"); //stateOnehundredtwentytwo
      },
      events: {
   "click #one": 			"stateOnehundredfiftythree",
	 "click #two": 			"stateOnehundredsixtyseven",
	 "click #three": 		"stateOnehundredtwentytwo",
      },
   },
   //stateOnehundredfiftyfive
   stateOnehundredfiftyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"A little bridge for our photograph"); //stateOnehundredsixtyeight
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateOnehundredsixtyeight",
      },
   },
   //stateOnehundredfiftysix
   stateOnehundredfiftysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I went through the bedroom into the en suite"); //stateSixteen
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSixteen",
      },
   },
   //stateOnehundredfiftyseven
   stateOnehundredfiftyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"All things were soul-sucking"); //stateMapone
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateMapone",
      },
   },
   //stateOnehundredfiftyeight
   stateOnehundredfiftyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Have you ever been so bored"); //stateOnehundredseventynine
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
},
      events: {
   "click #one": 			"stateOnehundredseventynine",
      },
   },
   //stateOnehundredfiftynine
   stateOnehundredfiftynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I went to the kitchen"); //stateNine
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateNine",
      },
   },
   //stateOnehundredsixty
   stateOnehundredsixty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I went to the bedroom"); //stateTwo
      },
      events: {
	 "click #three": 		"stateTwo",
      },
   },
   //stateOnehundredsixtyone
   stateOnehundredsixtyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I sat on my front steps"); //stateOnehundredsixtynine
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredsixtynine",
      },
   },
   //stateOnehundredsixtytwo
   stateOnehundredsixtytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Of course"); //stateOnehundredseventy
	 $('#two'   ).html(		"I like bad music"); //stateOnehundredseventy
	 $('#three' ).html(		"I feed on it"); //stateOnehundredseventy
      },
      events: {
   "click #one": 			"stateOnehundredseventy",
	 "click #two": 			"stateOnehundredseventy",
	 "click #three": 		"stateOnehundredseventy",
      },
   },
   //stateOnehundredsixtythree
   stateOnehundredsixtythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I decided to drive home"); //stateOnehundredtwentyseven
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredtwentyseven",
      },
   },
   //stateOnehundredsixtyfour
   stateOnehundredsixtyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I went to my car"); //stateOnehundredseventyone
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredseventyone",
      },
   },
   //stateOnehundredsixtyfive
   stateOnehundredsixtyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I decided to go home"); //stateOnehundredsixtyfour
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateOnehundredsixtyfour",
      },
   },
   //stateOnehundredsixtysix
   stateOnehundredsixtysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I felt warm"); //stateSeventysix
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSeventysix",
      },
   },
   //stateOnehundredsixtyseven
   stateOnehundredsixtyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"We buy them from"); //stateOnehundredtwentytwo
	 $('#two'   ).html(		"a Chinese grocery store"); //stateOnehundredtwentytwo
	 $('#three' ).html(		"and fire them at the beach, which was part of the other memory"); //stateOnehundredtwentytwo
      },
      events: {
   "click #one": 			"stateOnehundredtwentytwo",
	 "click #two": 			"stateOnehundredtwentytwo",
	 "click #three": 		"stateOnehundredtwentytwo",
      },
   },
   //stateOnehundredsixtyeight
   stateOnehundredsixtyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I went through the bedroom into the en suite"); //stateSixteen
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateSixteen",
      },
   },
   //stateOnehundredsixtynine
   stateOnehundredsixtynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I sat on my front steps"); //stateEnd
	 $('#three' ).html(		"");
      },
      events: {
         "click #two": 			"stateEnd",
      },
   },
//stateOnehundredseventy
   stateOnehundredseventy: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Derek was busy talking with other people"); //stateOnehundredsixtyfour
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredsixtyfour",
      },
   },
//stateOnehundredseventyone
   stateOnehundredseventyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I drove away from the house"); //stateOnehundredsixtyone
	 $('#two'   ).html(		"I drove away from the lake"); //stateOnehundredsixtyone
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredsixtyone",
	 "click #two": 			"stateOnehundredsixtyone",
      },
   },
//stateOnehundredseventytwo
   stateOnehundredseventytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"In love probably");
	 $('#three' ).html(		"");
      },
      events: {

	 "click #two": 			"stateOnehundredseventythree",
      },
   },
//stateOnehundredseventythree
   stateOnehundredseventythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I went to the bedroom"); //stateTwo
	 $('#two'   ).html(		"I went to the kitchen"); //stateNine
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateTwo",
	 "click #two": 			"stateNine",
      },
   },
//stateOnehundredseventyfour
   stateOnehundredseventyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I knew where Maria was"); //stateOnehundredseventyeight
 	 $('#two'   ).html(		"");
	 $('#three' ).html(		"but I did not know where Maria was"); //stateMapone
      },
      events: {
   "click #one": 			"stateOnehundredseventyeight",
	 "click #three": 		"stateMapone",
      },
   },
//stateOnehundredseventyfive
   stateOnehundredseventyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I folded myself around her"); //stateOnehundredseventyseven
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredseventyseven",
      },
   },
//stateOnehundredseventysix
   stateOnehundredseventysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I hoped to fall asleep"); //stateEnd
	 $('#three' ).html(		"");
      },
      events: {
	 "click #two": 			"stateEnd",
      },
   },
//stateOnehundredseventyseven
   stateOnehundredseventyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"She slowly became warm"); //stateEnd
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateEnd",
      },
   },
//stateOnehundredseventyeight
   stateOnehundredseventyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I drifted back toward the bed"); //stateOnehundredeighty
	 $('#three' ).html(		"I drifted back toward Maria"); //stateTwohundredfortythree
      },
      events: {
	 "click #two": 			"stateOnehundredeighty",
         "click #three":		"stateTwohundredfortythree",
      },
   },
//stateOnehundredseventynine
   stateOnehundredseventynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The lull"); //stateMapone
	 $('#two'   ).html(		"I followed the lull"); //stateMapone
	 $('#three' ).html(		"for whatever reason"); //stateMapone
      },
      events: {
   "click #one": 			"stateMapone",
	 "click #two": 			"stateMapone",
         "click #three":		"stateMapone",
      },
   },
//stateOnehundredeighty
   stateOnehundredeighty: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The sky became a bit lighter"); //stateEnd
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateEnd",
	 "click #two": 			"",
         "click #three":		"",
      },
   },
//stateOnehundredeightyone
   stateOnehundredeightyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The street seemed"); //stateOnehundredeightytwo
	 $('#two'   ).html(		"cold and"); //stateOnehundredeightytwo
	 $('#three' ).html(		"bored"); //stateOnehundredeightytwo
      },
      events: {
   "click #one": 			"stateOnehundredeightytwo",
	 "click #two": 			"stateOnehundredeightytwo",
         "click #three":		"stateOnehundredeightytwo",
      },
   },
//stateOnehundredeightytwo
   stateOnehundredeightytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I was extremely bored"); //stateEnd
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateEnd",
      },
   },
//stateOnehundredeightythree
   stateOnehundredeightythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"Maria was lying on the bed"); //stateSix
	 $('#three' ).html(		"I was already half asleep"); //stateSeven
      },
      events: {
	 "click #two": 			"stateSix",
         "click #three":		"stateSeven",
      },
   },
//stateOnehundredeightyfour
   stateOnehundredeightyfour: {
      onEnter: function( evt, previousState ) {
         $('#outermap').hide();
         $('#map').hide();
	 $('#mapnote').hide();
   $('#one'   ).html(		"The house was fleeting"); //stateOnehundredeightyfive
	 $('#two'   ).html(		"The house was pretty boring");//stateOnehundredeightysix
	 $('#three' ).html(		"The house was familiar"); //stateOnehundredeightyseven
      },
      events: {
   "click #one": 			"stateOnehundredeightyfive",
	 "click #two": 			"stateOnehundredeightysix",
	 "click #three": 		"stateOnehundredeightyseven",
      },
   },
   //stateOnehundredeightyfive
   stateOnehundredeightyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Everything seemed normal now"); //stateOnehundredeightyeight
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
     },
      events: {
   "click #one": 			"stateOnehundredeightyeight",
      },
   },
   //stateOnehundredeightysix
   stateOnehundredeightysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"But then again"); //stateOnehundredeightynine
	 $('#two'   ).html(		"I've been bored for hours"); //stateOnehundredeightynine
	 $('#three' ).html(		"and bored and bored"); //stateOnehundredeightynine
      },
      events: {
   "click #one": 			"stateOnehundredeightynine",
	 "click #two": 			"stateOnehundredeightynine",
	 "click #three": 		"stateOnehundredeightynine",
      },
   },
   //stateOnehundredeightyseven
   stateOnehundredeightyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"All houses seemed familiar"); //stateOnehundredninety
      },
      events: {
	 "click #three": 		"stateOnehundredninety",
      },
   },
   //stateOnehundredeightyeight
   stateOnehundredeightyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Everything seemed boring still"); //stateOnehundredninetyone
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredninetyone",
      },
   },
   //stateOnehundredeightynine
   stateOnehundredeightynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I drank a bit of water"); //stateEnd
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I sat up in bed"); //stateOnehundredninetytwo
      },
      events: {
   "click #one": 			"stateEnd",
	 "click #three": 		"stateOnehundredninetytwo",
      },
   },
   //stateOnehundredninety
   stateOnehundredninety: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"All houses spoke a language"); //stateOnehundredninetythree
	 $('#two'   ).html(		"A language of houses and"); //stateOnehundredninetythree
	 $('#three' ).html(		"most houses were pretty boring"); //stateOnehundredninetythree
      },
      events: {
   "click #one": 			"stateOnehundredninetythree",
	 "click #two": 			"stateOnehundredninetythree",
         "click #three":		"stateOnehundredninetythree",
      },
   },
   //stateOnehundredninetyone
   stateOnehundredninetyone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Whatever, I guess"); //stateOnehundredninetyfour
	 $('#two'   ).html(		"It's all more or less boring and whatever"); //stateOnehundredeightynine
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredninetyfour",
	 "click #two": 			"stateOnehundredeightynine",
      },
   },
   //stateOnehundredninetytwo
   stateOnehundredninetytwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"The bed was cold"); //stateOnehundredninetyfive
      },
      events: {
	 "click #three": 		"stateOnehundredninetyfive",
      },
   },
   //stateOnehundredninetythree
   stateOnehundredninetythree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Probably"); //stateOnehundredeightynine
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredeightynine",
      },
   },
   //stateOnehundredninetyfour
   stateOnehundredninetyfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I went to the bedroom window"); //stateOnehundredninetysix
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredninetysix",
      },
   },
   //stateOnehundredninetyfive
   stateOnehundredninetyfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"Maria was not next to me"); //stateOnehundredninetynine
      },
      events: {
	 "click #three": 		"stateOnehundredninetynine",
      },
   },
   //stateOnehundredninetysix
   stateOnehundredninetysix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I pulled up the blinds"); //stateOnehundredninetyseven
	 $('#two'   ).html(		"The window was cold and boring"); //stateOnehundredninetyeight
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredninetyseven",
	 "click #two": 			"stateOnehundredninetyeight",
      },
   },
   //stateOnehundredninetyseven
   stateOnehundredninetyseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The blinds were heavy and boring"); //stateTwohundred
	 $('#two'   ).html(		"I saw a light coming over the houses"); //stateTwohundredtwo
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateTwohundred",
	 "click #two": 			"stateTwohundred",
      },
   },
   //stateOnehundredninetyeight
   stateOnehundredninetyeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"I went back to the bed"); //stateTwohundredone
      },
      events: {
	 "click #three": 		"stateTwohundredone",
      },
   },
   //stateOnehundredninetynine
   stateOnehundredninetynine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I didn't remember when she would be back"); //stateEnd
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateEnd",
      },
   },
   //stateTwohundred
   stateTwohundred: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"The bed was heavy and boring, too"); //stateTwohundredthree
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateTwohundredtwo",
      },
   },
   //stateTwohundredone
   stateTwohundredone: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"The cat approached my feet");
      },
      events: {
	 "click #three": 		"stateOnehundredninetyfive",
      },
   },
   //stateTwohundredtwo
   stateTwohundredtwo: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"Bored bored bored bored");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateEnd",
      },
   },
   //stateTwohundredthree
   stateTwohundredthree: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"All of my clothes");
	 $('#two'   ).html(		"I closed the closet door");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateNinetynine",
	 "click #two": 			"stateNinetynine",
      },
   },
   //stateTwohundredfour
   stateTwohundredfour: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"The other side has some flowers on it");
	 $('#three' ).html(		"");
      },
      events: {

	 "click #two": 			"stateOnehundredthirtyfive",
      },
   },
   //stateTwohundredfive, from "I was wary of the listening abilities of water"
   stateTwohundredfive: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"This might sound paranoid but truly: the water is always listening");
      },
      events: {
	 "click #three": 		"stateTwohundredsix",
      },
   },
   //stateTwohundredsix
   stateTwohundredsix: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I filled the glass with water"); //stateOnehundredfourteen
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateOnehundredfourteen",
      },
   },
   //stateTwohundredseven
   stateTwohundredseven: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"I took the envelopes");
	 $('#two'   ).html(		"I lay on the couch");
	 $('#three' ).html(		"These all look boring");
      },
      events: {
   "click #one": 			"stateThirteen",
	 "click #two": 			"stateThirteen",
	 "click #three": 		"stateThirteen",
      },
   },
   //stateTwohundredeight
   stateTwohundredeight: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"<p class='clock'>3<blink> : </blink>04</p>"); //stateTwohundrednine
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
   "click #one": 			"stateTwohundrednine",
      },
   },
   //stateTwohundrednine
   stateTwohundrednine: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"I checked my phone"); //stateFortyseven
	 $('#three' ).html(		"The sheets were cold"); //stateFortysix
      },
      events: {
	 "click #two": 			"stateFortyseven",
	 "click #three": 		"stateFortysix",
      },
   },
   //stateTwohundredten
   stateTwohundredten: {
      onEnter: function( evt, previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"I thought that I saw the reflection from Maria's eyes"); //stateTwohundredeleven
         $('#two').html(		"but there were only shoes in the closet"); //stateTwohundredeleven
         $('#three').html(		"");
         },
      events: {
	 "click #one":			"stateTwohundredeleven",
	 "click #two":			"stateTwohundredeleven",
       },
   },
   //stateTwohundredeleven
   stateTwohundredeleven: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"I looked at some of the shoes"); //stateTwohundredtwelve
         $('#two').html(		"");
         $('#three').html(		"");
      },
      events: {
	 "click #one":			"stateTwohundredtwelve",
       },
   },
   //stateTwohundredtwelve
   stateTwohundredtwelve: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"The shoes had all been worn many times"); //stateTwohundredthirteen
         $('#two').html(		"");
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateTwohundredthirteen",
       },
    },
   //stateTwohundredthirteen
   stateTwohundredthirteen: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"They were just lying there in the dark"); //stateTwohundredfourteen
         $('#two').html(		"They looked cold and bored"); //stateTwohundredfourteen
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateTwohundredfourteen",
         "click #two":			"stateTwohundredfourteen",
       },
    },
   //stateTwohundredfourteen
   stateTwohundredfourteen: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"Like shoes or whatever"); //stateEnd
         $('#two').html(		"");
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateEnd",
       },
    },
   //stateTwohundredfifteen
   stateTwohundredfifteen: {
      onEnter: function( evt, previousState ) {
         $('#map').toggle();
         $('#mapnote').toggle();
	 $('#outermap').toggle();
         $('#one').html(		"");
         $('#two').html(		"The stairs didn't seem to go anywhere"); //stateTwohundredsixteen
         $('#three').html(		"");
      },
      events: {
         "click #two":			"stateTwohundredsixteen",
       },
    },
   //stateTwohundredsixteen
   stateTwohundredsixteen: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"");
         $('#two').html(		"I went out the side entrance"); //stateTwohundredseventeen
         $('#three').html(		"");
      },
      events: {
         "click #two":			"stateTwohundredseventeen",
       },
    },
   //stateTwohundredseventeen
   stateTwohundredseventeen: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"");
         $('#two').html(		"I walked to the front of the house"); //stateOnehundredeightyone
         $('#three').html(		"");
      },
      events: {
         "click #two":			"stateOnehundredeightyone",
       },
    },
   //stateTwohundredeighteen
   stateTwohundredeighteen: {
      onEnter: function( evt, previousState ) {
	 $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"Kitchen");
         $('#two').html(		"");
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateTwohundrednineteen",
       },
    },
   //stateTwohundrednineteen
   stateTwohundrednineteen: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"There was a piano in the kitchen"); //stateTwohundredtwenty
         $('#two').html(		"");
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateTwohundredtwenty",
       },
    },
   //stateTwohundredtwenty
   stateTwohundredtwenty: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"I sat down at the piano");
         $('#two').html(		"like I would at any piano");
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateTwohundredtwentyone",
         "click #two":			"stateTwohundredtwentytwo",
       },
    },
   //stateTwohundredtwentyone
   stateTwohundredtwentyone: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"The piano was sandpapery");
         $('#two').html(		"and elongated");
         $('#three').html(		"and silent");
      },
      events: {
   "click #one":			"stateTwohundredtwentythree",
         "click #two":			"stateTwohundredtwentythree",
         "click #three":		"stateTwohundredtwentythree",
       },
    },
   //stateTwohundredtwentytwo
   stateTwohundredtwentytwo: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"I sat at the piano for a long time"); //stateTwohundredtwentythree
         $('#two').html(		"");
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateTwohundredtwentythree",
       },
    },
   //stateTwohundredtwentythree
   stateTwohundredtwentythree: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"");
         $('#two').html(		"<p class='clock'>99<blink> : </blink>99</p>");
         $('#three').html(		"");
      },
      events: {
         "click #two":			"stateTwohundredtwentyfour",
       },
    },
   //stateTwohundredtwentyfour
   stateTwohundredtwentyfour: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"There was a digital clock built in to front of the piano");
         $('#two').html(		"");
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateTwohundredtwentyfive",
       },
    },
   //stateTwohundredtwentyfive
   stateTwohundredtwentyfive: {
      onEnter: function( evt, previousState ) {
         $('#one').html(		"Weird"); //stateOnehundredeightyfour
         $('#two').html(		"");
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateOnehundredeightyfour",
       },
    },
   //stateTwohundredtwentysix
   stateTwohundredtwentysix: {
      onEnter: function( evt, previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"The cat lying in a pile of Maria's clothes"); //stateMapone
         $('#two').html(		"");
         $('#three').html(		"");
      },
      events: {
   "click #one":			"stateMapone",
       },
    },
   //stateTwohundredtwentyseven
   stateTwohundredtwentyeight: {
      onEnter: function( evt,previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"");
         $('#two').html(		"It's just the hallway"); //stateMapone
         $('#three').html(		"");
      },
      events: {
         "click #two":			"stateMapone",
       },
    },
   //stateTwohundredtwentyeight
   stateTwohundredtwentyeight: {
      onEnter: function( evt,previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"");
         $('#two').html(		"The vacuum, the Christmas lights, etc."); //stateSixtyeight
         $('#three').html (		"");
      },
      events: {
         "click #two":			"stateSixtyeight",
       },
    },
   //stateTwohundredtwentynine
   stateTwohundredtwentynine: {
      onEnter: function( evt,previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"");
         $('#two').html(		"The cat lying in a small pile of my clothes"); //stateMapone
         $('#three').html (		"");
      },
      events: {
         "click #two":			"stateMapone",
       },
    },
   //stateTwohundredthirty
   stateTwohundredthirty: {
      onEnter: function( evt,previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"");
         $('#two').html(		"The den is empty"); //stateMapone
         $('#three').html (		"");
      },
      events: {
         "click #two":			"stateMapone",
       },
    },
   //stateTwohundredthirtyone
   stateTwohundredthirtyone: {
      onEnter: function( evt,previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"");
         $('#two').html(		"The other bedroom"); //stateTwohundredthirtytwo
         $('#three').html (		"");
      },
      events: {
         "click #two":			"stateTwohundredthirtytwo",
       },
    },
   //stateTwohundredthirtytwo
   stateTwohundredthirtytwo: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"There are some boxes"); //stateTwohundredthirtythree
         $('#two').html(		"some baseboards against the wall"); //stateTwohundredthirtyfour
         $('#three').html (		"a can of paint"); //stateTwohundredthirtyfive
      },
      events: {
   "click #one":			"stateTwohundredthirtythree",
         "click #two":			"stateTwohundredthirtyfour",
         "click #three":		"stateTwohundredthirtyfive",
       },
    },
   //stateTwohundredthirtythree
   stateTwohundredthirtythree: {
      onEnter: function( evt,previousState ) {
         //$('#map').hide();
         //$('#mapnote').hide();
	 //$('#outermap').hide();
         $('#one').html(		"Inside the boxes there are books");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateTwohundredthirtysix",
       },
    },
   //stateTwohundredthirtyfour
   stateTwohundredthirtyfour: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"I don't remember when we started renovating"); //stateTwohundredthirtyeight
         $('#two').html(		"It could have been years ago"); //stateTwohundredthirtyeight
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateTwohundredthirtyeight",
         "click #two":			"stateTwohundredthirtyeight",
       },
    },
   //stateTwohundredthirtyfive
   stateTwohundredthirtyfive: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"The colour was Factory White");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateTwohundredthirtynine",
       },
    },
   //stateTwohundredthirtysix
   stateTwohundredthirtysix: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"The Fountainhead"); //stateTwohundredthirtyseven
         $('#two').html(		"The Girl with the Dragon Tattoo"); //stateTwohundredthirtyseven
         $('#three').html (		"Blah blah blah blah"); //stateTwohundredthirtyseven
      },
      events: {
   "click #one":			"stateTwohundredthirtyseven",
         "click #two":			"stateTwohundredthirtyseven",
         "click #three":		"stateTwohundredthirtyseven",
       },
    },
   //stateTwohundredthirtyseven
   stateTwohundredthirtyseven: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"I went back out into the house"); //stateOnehundredeightyfour
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateOnehundredeightyfour",
       },
    },
   //stateTwohundredthirtyeight
   stateTwohundredthirtyeight: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"A light was coming in the window");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateEnd",
       },
    },
   //stateTwohundredthirtynine
   stateTwohundredthirtynine: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"Have you ever been so bored");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateEnd",
       },
    },
   //stateTwohundredforty
   stateTwohundredforty: {
      onEnter: function( evt,previousState ) {
	 $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"This closet was filled with packing peanuts");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateMapone",
       },
    },
   //stateTwohundredfortyone
   stateTwohundredfortyone: {
      onEnter: function( evt,previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"Some Advil, etc."); //stateMapone
         $('#two').html(		"I felt really thirsty"); //stateTwohundredfortytwo
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateMapone",
         "click #two":			"stateTwohundredfortytwo",
       },
    },
   //stateTwohundredfortytwo
   stateTwohundredfortytwo: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"But tonight I would not drink any water"); //stateOnehundredseventyeight
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateOnehundredseventyeight",
       },
    },
   //stateTwohundredfortythree
   stateTwohundredfortythree: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"Maria was fast asleep");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateTwohundredfortyfour",
       },
    },
   //stateTwohundredfortyfour
   stateTwohundredfortyfour: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"I did not want to wake her");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateEnd",
       },
    },
   //stateTwohundredfortyfive
   stateTwohundredfortyfive: {
      onEnter: function( evt,previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"");
         $('#two').html(		"If I had more time I would take a bath"); //stateTwohundredfortysix
         $('#three').html (		"");
      },
      events: {
         "click #two":			"stateTwohundredfortysix",
       },
    },
   //stateTwohundredfortysix
   stateTwohundredfortysix: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"");
         $('#two').html(		"<p class='clock'>4<blink> : </blink>03</p>"); //stateTwohundredfortyseven
         $('#three').html (		"");
      },
      events: {
         "click #two":			"stateTwohundredfortyseven",
       },
    },
   //stateTwohundredfortyseven
   stateTwohundredfortyseven: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"");
         $('#two').html(		"I went to the bedroom"); //stateOnehundredninetyfour
         $('#three').html (		"");
      },
      events: {
         "click #two":			"stateOnehundredninetyfour",
       },
    },
   //stateTwohundredfortyeight
   stateTwohundredfortyeight: {
      onEnter: function( evt,previousState ) {
         $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"The whole neighbourhood was here dancing");
         $('#two').html(		"in my living room"); //stateTwohundredfortynine
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateTwohundredfortynine",
         "click #two":			"stateTwohundredfortynine",
       },
    },
   //stateTwohundredfortynine
   stateTwohundredfortynine: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"Somebody told me"); //stateTwohundredfifty
         $('#two').html(		"Lucas, you'd better"); //stateTwohundredfifty
         $('#three').html (		"start moving that body"); //stateTwohundredfiftyone
      },
      events: {
   "click #one":			"stateTwohundredfifty",
         "click #two":			"stateTwohundredfifty",
         "click #three":		"stateTwohundredfiftyone",
       },
    },
   //stateTwohundredfifty
   stateTwohundredfifty: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"But really the living room was empty");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateFour",
       },
    },
   //stateTwohundredfiftyone
   stateTwohundredfiftyone: {
      onEnter: function( evt,previousState ) {
         $('#one').html(		"What body");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateEnd",
       },
    },
   //stateTwohundredfiftytwo
   stateTwohundredfiftytwo: {
      onEnter: function( evt,previousState ) {
	 $('#map').hide();
         $('#mapnote').hide();
	 $('#outermap').hide();
         $('#one').html(		"En suite");
         $('#two').html(		"");
         $('#three').html (		"");
      },
      events: {
   "click #one":			"stateSixteen",
       },
    },

   //stateEnd
   stateEnd: {
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
      },
      events: {
         "click .grid": 			"stateOne",
      },
   },
 //stateMapone
   stateMapone: {
      defaultState: false,
      onEnter: function( evt, previousState ) {
   $('#one'   ).html(		"");
	 $('#two'   ).html(		"");
	 $('#three' ).html(		"");
         $('#outermap').toggle();
         $('#map'   ).toggle();
      },
      events: {
         "click #entrancecloset":	"stateTwohundredten",
	 "click #stairs":		"stateTwohundredfifteen",
	 "click #kitchen":		"stateTwohundredeighteen",
	 "click #mastercloset":		"stateTwohundredtwentysix",
	 "click #hallway":		"stateTwohundredtwentyseven",
	 "click #hallcloset":		"stateTwohundredtwentyeight",
	 "click #dencloset":		"stateTwohundredtwentynine",
	 "click #den":			"stateTwohundredthirty",
	 "click #bedroom":		"stateTwohundredthirtyone",
	 "click #bedroomcloset":	"stateTwohundredforty",
	 "click #bathroomcloset":	"stateTwohundredfortyone",
	 "click #bathroom":		"stateTwohundredfortyfive",
	 "click #livingroom":		"stateTwohundredfortyeight",
	 "click #ensuite":		"stateTwohundredfiftytwo",
	 "click #masterbedroom":	"stateOnehundredeightyfour",
      },
   }
});
});
