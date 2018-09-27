// console.log("we love tomagatchi");

/************************************************************************
TOMAGOTCHI CLASS + INSTANT(FOR NOW)
*************************************************************************/

class Tomagotchi {

	constructor(name, img, hunger, sleepiness, boredom) {
		this.name = name;
		this.img = img;
		this.age= 0;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.alive = true;
	}

	die(){
		console.log(this.name + "dead");
		this.alive = false;
	}

	isDead() {
		
	}
};

/**********************************************************************
NOTES + PSEUDO

CONSTRUCTOR PSEUDO

constructor() will include parameter for name and image
		method interval()=> {
			increases over time	
			every 30 seconds choose a variable 1-3, raise one stat accordingly
		}  

DIE METHOD

if (jim.hunger >= 10 || jim.sleepiness >= 10 || jim.boredom >= 10) {
	console.log(this.name + "dead");
	clearInterval();
};	
^^this goes in here somewhere but I'm not sure how yet

CLASS LEFTOVERS

These were jetisoned from my Tomagotchi for the sake of simplifying - trying to fit all that (below) stuff. don't need it in the object itself
		this.statGrower = () =>{
				let statInt = Math.floor((Math.random() * 3) +1);
				if (statInt === 1) {
					this.hunger++
				} if (statInt === 2) {
					this.sleepiness++
				} if (statInt === 3) {
					this.boredom++;
				}
			};


		this.ageUp = () => {
				if ((this.interval() % 60000) === 0) {
					this.age++
				}
			};

	age -> increases at interval - on the minute

	hunger -> increases on interval1
	sleepiness -> increases on interval2
	boredom -> increases on interval3



	die () => {
			if hunger OR sleepiness OR boredom === 10, 
				trigger death() method

	die() {

	}
	
	emote() => {
			only going to mess with this after MVP - animation reaction? 
	}
}

SUPER TOMAGATCHI PSEUDO

strech goals: 
class SuperTomagotchi = {
	takes same parameters as before
	hunger, sleepiness, boredom, die, emote are are all super
	
	new:
	eggCounter -> increases every 30. 
	when it reaches a certain point, instantiates a new tomagotchi

stats, etc.  (other listeners)

let $hungry = $('#hungry').append(jim.hunger);
let $sleepy = $('#sleepy').append(jim.sleepiness);
let $bored = $('#bored').append(jim.boredom);

hungry (or any).on('change', function () {
	overwrites new stat
})

.on('change', function() {
	$('#hungry').text('Hunger: ' + jim.hunger)
});

.on('change', function() {
	$('#sleepy').text('Sleepiness: ' + jim.sleepiness)
});

.on('change', function() {
	$('#bored').text('Boredom: ' + jim.boredom)
});

would like to maket his like more of a stat bar that rises



***********************************************************************
BUTTON ZONE: 
***********************************************************************/

let $feed = $('#feed');
let $lights = $('#lights');
let $play = $('#play');
let $start = $('#start');
let $style = $('style');


//feedButton on click -> call feed() 

$feed.on('click', function(){
	console.log('feed kirb')
	game.tom.hunger--;
	game.updateStats();
});

	//lightsOutButton on click -> calls night()

$lights.on('click', function(){
	console.log('turn of the lights')
	// game.tom.sleepiness--;
	$style.append('.game {background-color: purple; border: 1px solid lavender;}')

	game.updateStats();
});

	//playButton -> calls play()

$play.on('click', function(){
	console.log('have some fun w kirb')
	game.tom.boredom--;
	game.updateStats();
});    

	//let's add a start button that starts the game

$start.on('click', function() {
	if (game.counter === 0){
		console.log('new game')
		game.startGame();
		console.log(game.tom);
	} else {
		let restartPrompt = null
		if (game.tom.alive === true) {
			restartPrompt = prompt('Do you want to reset the game and KILL your Tomagotchi? Enter y/n')
		} if (game.tom.alive === false) {
			restartPrompt = prompt('Do you want to reset the game?')
		} if (restartPrompt === 'y') {
			game.endGame();
			console.log('better luck next time');
			game.startGame();
		}
	}
});

/************************************************************************
GAME OBJECT
*************************************************************************/

const game = {
	tom: null,
	counter: 0,
	intervalID: null,
	timer(){ 
		this.intervalID = setInterval(()=>{
			this.counter++; 
				/*LOWER or RAISE math.floor to make game HARDER or EASIER */
			if ((this.counter % 2) === 0) {
				let statInteger = Math.floor((Math.random() * 5) +1);
				this.statBoost(statInteger);	
			};
				/*LOWER or RAISE modulus to make game SHORTER or LONGER*/
			if ((this.counter % 60) === 0) {
				this.age();
			};
			this.updateStats();
			this.endGame();
		}, 1000)
	},

	statBoost(whichStat){
		if (whichStat === 1) {
				this.tom.hunger++;
				console.log('kirb hungry')
			} if (whichStat === 2) {
				this.tom.sleepiness++;
				console.log('kirb sleepy');
			} if (whichStat === 3) {
				this.tom.boredom++;
				console.log('kirb bored');
			}
	},

	age() {
		this.tom.age++;
		console.log('happy birthday!');

	},

	updateStats() {
		$('#hungry').text('hngr: ' + this.tom.hunger);
		$('#sleepy').text('slpy: ' + this.tom.sleepiness);
		$('#bored').text('brdm: ' + this.tom.boredom);
		$('#nameAge').text(this.tom.name + '  age:' + this.tom.age)
	},

	startGame(){
		this.tom = new Tomagotchi('Kirby', 'img', 5, 5, 5);
		this.timer();
	},

	endGame() {
		if (this.tom.hunger >= 10 || this.tom.sleepiness  >= 10 || this.tom.boredom >= 10) {
		this.tom.die();
		clearInterval(this.intervalID);
		console.log('game over lzr');
		}			
	},	

};
		
/*************************************************************************			
OTHER GAME OBJ NOTES/PSEUDO
	}

		instantiates Tomagatchi with name, img
		is there any way to win this? 
		
		when tomagatchi.age > a certain point, call evolve()
		
	consts

		tomagatchi objects from which we will substantiate:
			tomagatchi: {
				name: "dury crow"
				img: "TKTK"
			}
		timer()



	methods: 

		night() => {
			turns screen black
			lowers sleepiness on 30/20 second interval
			stretch goal: hide play and feed buttons?
		}


		play() => {lowers boredom by random interval 1-2
			stretch goal: emote when you get a 2
		}

		die() => {
			calls a game over screen/message
		}

		stretch: 
		emote() => {
			tomagotchi does cute react - possibly when certain conditions are met
		}
 		evolve() => {
			instantiates new super tomagatchi
		}	
*************************************************************************/

