console.log("we love tomagatchi");

//class Tomagotchi = {
	//constructor() will include parameter for name and image

	//method interval()=> {
	//	increases over time	
	//	every 30 seconds choose a variable 1-3, raise one stat accordingly
	//} 
	
	//age -> increases at interval - on the minute

	//hunger -> increases on interval1
	//sleepiness -> increases on interval2
	//boredom -> increases on interval3
	//die () => {
	//		if hunger OR sleepiness OR boredom === 10, 
	//			trigger death() method
	
	//emote() => {
	//		only going to mess with this after MVP - animation reaction? 
	//}
//}

//strech goals: 
//class SuperTomagotchi = {
	//takes same parameters as before
	//hunger, sleepiness, boredom, die, emote are are all super
	
	//new:
	//eggCounter -> increases every 30. 
	//when it reaches a certain point, instantiates a new tomagotchi

//}

// class Tomagotchi = {
// 	constructor () {
// 	}
// };

//game object

const game = {

	// 	startGame
		
		//instantiates Tomagatchi with name, img
		//is there any way to win this? 
		
		//when tomagatchi.age > a certain point, call evolve()
		
	//consts

		//tomagatchi objects from which we will substantiate:
			//tomagatchi: {
			//	name: "dury crow"
			//	img: "TKTK"
			//}

	//buttons, etc. 

		//feedButton on click -> call feed() 

		//lightsOutButton on click -> calls night()

		//playButton -> calls play()

	//methods: 

		//night() => {
		//	turns screen black
		//	lowers sleepiness on 30/20 second interval
			//stretch goal: hide play and feed buttons?
		//}

		//feed() => {
		//	lowers hunger by 1	
		//}

		//play() => {lowers boredom by random interval 1-2
		//	stretch goal: emote when you get a 2
		//}

		//die() => {
		//	calls a game over screen/message
		//}

		//stretch: 
		//emote() => {
		//	tomagotchi does cute react - possibly when certain conditions are met
		//}
 		//evolve() => {
		//	instantiates new super tomagatchi
		//}	
};