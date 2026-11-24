// console.log('hello')

// var usname = prompt("enter your name")
// var age = prompt("age")
// console.log('welcome' ,usname, age);
// age++
// console.log(age);
// age--
// console.log(age);


//ask a user his age and check if he is adult or not
// var age = Number(prompt('Enter your age'))
// if(age>18){
//     console.log('adult')
// }
// else{
//     console.log('not adult')
// }


// ask user to his bill ka units and if it is greater than 100 units then calculate on the basis of 10 rs per units if more than 50 units then calculate on the basis of 8 rs per unit and if less calculate on 5 rs per unit
// var unit = Number(prompt("Enter Units"))
// var bill
// if (unit>=100){
//     bill = unit*10
// }
// else if(unit>50){
//     bill= unit*8
// }
// else{
//     bill = unit*5
// }

// console.log(bill);


//switch case//

// switch(3){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     case 4:
//         console.log("four");
//         break; 
//     default:
//         console.log("Not match");               
// }

//function//
// function greet(){
// 	console.log("hello world");
// }

// greet();
// greet();
// greet();
// greet();

//iife//
// var ans =(function abcd(){
// 	var a = 12;
// 	return{
// 	    set: function (val) {
// 	        a = val;
// 	    },
// 	    get: function () {
// 	        console.log(a);
// 	    },
// 	};
// })();

// ans.set("32");
// ans.get();

//ex2//
// var shery =(function library(){;
// 	return {
// 	    mouseEffect: function () {
// 	        console.log("image effect");
// 	    },
// 	    mouseFollower: function () {
// 	        console.log("mouse follower");
// 	    },
// 	};
// })();

// shery.mouseFollower();



// function abcd(fn){
// 	setTimeout(fn,3000);
// }

// abcd(function(){
// 	console.log("hey");
// })


//impliment our own version of map as a higher-order function.
// var arr = [1,2,3,4,5];
// function hap(a, fn){
// 	var newArr = [];
// 	for(var i=0; i<a.length; i++){
// 		newArr.push(fn(a[i]));
// 	}
// 	return newArr;

// }

// var ans = hap(arr, function(value){
// 	return value+2;
// });

// console.log(ans);

// //write a function that uses clouser to create  a counter.
// function abcd(){
// 	let def = 0;
// 	return function(){
// 		console.log(def);
// 	}
// }

// //counter
// function counter(){
// 	let count = 0;
// 	return function(){
// 		count++;
// 		console.log(count);
// 	};
// }

// var mkc = counter();
// mkc();
// mkc();
// mkc();

// //implement a function that limits how many times another functi0n can be called
// function funlimiter(fn, limit){
// 	let totalcalled = 0;

// 	return function(){
// 		if(totalcalled <limit){
// 			totalcalled++;
// 			fn();
// 		}
// 		else{
// 			console.error("limit reached, Buy pro Pack for more limits ");
// 		}
// 	};

// }
// let limiter =  funlimiter(function(){
// 	console.log("hey");
// },3);

// limiter();
// limiter();
// limiter();
// limiter();
 
//example of friend request
// var btn = document.querySelector('button')
// var h = document.querySelector('h5')

// btn.addEventListener('click', function(){
// 	console.log('hello');
// 	h.innerHTML = 'Request sending...'
// 	h.style.color = 'pink'
// 	btn.innerHTML = 'Remove Friend'
	
// })

//ex2
// var btn = document.querySelector('button')
// var h = document.querySelector('h5')

// var check = 0

// btn.addEventListener('click', function(){
// 	console.log('hello');
// 	if(check == 0){
// 		h.innerHTML = 'Friends'
//	    h.style.color = 'pink'
// 	    btn.innerHTML = 'Remove Friend'
// 		console.log('friend done')
// 		check = 1
// 	}
// 	else{
// 		h.innerHTML = 'Stranger'
// 	    h.style.color = 'blue'
// 	    btn.innerHTML = 'Add Friend'
// 		console.log('friend over')
// 		check = 0
// 	}
// })

//---day 10--
//var a = 19
//template litterals
// console.log(`hello, ${a}`);

//color pallet-------------
// var btn = document.querySelector('button')
// var box = document.querySelector('#box')

// btn.addEventListener('click', function(){
// 	//console.log('hello');
// 	//random number generate karna h 
// 	var c1 = Math.floor(Math.random()*256)
// 	var c2 = Math.floor(Math.random()*256)
// 	var c3 = Math.floor(Math.random()*256)
// 	//console.log(c1,c2,c3)  enko background-color  me dalna h 
// 	// box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
// 	console.log(c1,c2,c3)
// 	box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
// })

//----------------random pick names-------------
//var arr = ['Sarthak', 'Harsh', 'Akarsh', 'Vedant']
//console.log(arr.length-1);

//ex2
// var arr = ['Sarthak', 'Harsh', 'Akarsh', 'Vedant','gopal', 'motu', 'aman', 'Rishu','uttam', 'shreya']
// var num = Math.floor(Math.random()*arr.length)
// console.log(arr[num]);

//ex3----------guess winner------
// var btn = document.querySelector('button')
// var h = document.querySelector('h1')

// btn.addEventListener('click', function(){
// 	h.innerHTML = 'Radha...hurrrreeee'
// })
1
//or
// let arr = ['CSK', 'MI', 'RCB', 'KKR', 'SRH', 'DC', 'PBKS', 'RR', 'LSG', 'GT']
// //console.log(arr);
// var btn = document.querySelector('button')
// var h = document.querySelector('h1')

// btn.addEventListener('click', function(){
// 	let num = Math.floor(Math.random()*arr.length)
// 	//console.log(num);
// 	//console.log(arr[num]);
// 	let winner = arr[num];
// 	//console.log(winner);
// 	h.innerHTML = winner;
// })

//----------------
//var arr = [{},{},{}] objects
var arr = [
	{
		team : 'CSK',
		primary : 'yellow',
		sec : 'green'
	},
	{
		team : 'RCB',
		primary : 'red',
		sec : 'black'
	},
	{
		team : 'MI',
		primary : 'blue',
		sec : 'gold'
	},
	{
		team : 'KKR',
		primary : 'purple',
		sec : 'gold'
	},
	{
		team : 'SRH',
		primary : 'orange',
		sec : 'black'
	}
]
console.log(arr);
console.log(arr[0]);
console.log(arr[0].team);

var btn = document.querySelector('button')
var h = document.querySelector('h1')

btn.addEventListener('click', function(){
	// console.log('hello');
	var num = Math.floor(Math.random()*arr.length)
	// console.log(arr[num].team)
	var winner = arr[num]
	h.innerHTML = winner.team
	h.style.backgroundColor = winner.primary
	h.style.color = winner.sec
	
})

