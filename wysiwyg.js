var famPeople = [
	{
		title: "Presidentail Candidate",
		name: "Hillary Clinton",
		bio: "An American politician who was the 67th United States Secretary of State from 2009 to 2013, U.S. Senator from New York from 2001 to 2009, First Lady of the United States from 1993 to 2001, and the Democratic Party's nominee for President of the United States in the 2016 election.",
		image: "https://pbs.twimg.com/profile_images/839938827837976576/leN1zJJx.jpg",
		lifespan: {
			birth: 1947,
			death: "----"
		}
	},
	{
		title: "Senator",
		name: "Elizabeth Warren",
		bio: "An American academic and politician. She is a member of the Democratic Party and is the senior United States Senator from Massachusetts. Warren was formerly a professor of law, and taught at the University of Texas School of Law, the University of Pennsylvania Law School, and most recently at Harvard Law School. A prominent scholar specializing in bankruptcy law, Warren was among the most cited in the field of commercial law before starting her political career.",
		image: "https://static.elizabethwarren.com/assets/images/intro-video-still.jpg",
		lifespan: {
			birth: 1949,
			death: "----"
		}	
	},
	{
		title: "Supreme Court Justice",
		name: "Ruth Bader Ginsburg",
		bio: "An Associate Justice of the Supreme Court of the United States. Ginsburg was appointed by President Bill Clinton and took the oath of office on August 10, 1993. She is the second female justice to be confirmed to the Court (after Sandra Day O'Connor), and one of four female justices to be confirmed (with Sonia Sotomayor and Elena Kagan, who are still serving). ",
		image: "https://feminem.org/wp-content/uploads/2016/11/Ruth_Bader_Ginsburg_official_SCOTUS_portrait_crop.jpg",
		lifespan: {
			birth: 1933,
			death: "----"
		}
	}
];

for (let i = 0; i < famPeople.length; i++) {
	document.getElementById("container").innerHTML += 
		`<div class="person" id="person--${i}">
			<header id="nameTitle">${famPeople[i].name} - ${famPeople[i].title}</header><br>
			<img src = "${famPeople[i].image}"/><br>
			<section id="imageBio" class="imageBio">${famPeople[i].bio}</section><br>
			<footer id="lifespan">${famPeople[i].lifespan.birth} to ${famPeople[i].lifespan.death}</footer>
		</div><br>`
}

let input = document.getElementById("userInput");
let personDiv = document.getElementsByClassName("person");

for (var i = 0; i < famPeople.length; i++) {
	personDiv[i].addEventListener("click", function (event) {
		event.currentTarget.classList.toggle("add-border");
		input.focus();
		let newImageBio = event.currentTarget.querySelector(".imageBio")
		input.addEventListener("keyup", function(e) {
			// event.target.innerHTML = input.value;
			// console.log("parent or child", event.target.id);
			return newImageBio.innerHTML = input.value
			// event.currentTarget.classList.toggle("add-border")

		});

	});
};

// for (var i = 0; i < famPeople.length; i++) {
// let newImageBio = event.currentTarget.querySelector(".imageBio")
// 		input.addEventListener("keyup", function(e) {
// 			// event.target.innerHTML = input.value;
// 			// console.log("parent or child", event.target.id);
// 			return newImageBio.innerHTML = input.value
// 			// event.currentTarget.classList.toggle("add-border")

// 		});


input.addEventListener('keydown', function() {
		if (event.key === 'Enter') {
			personDiv[0].focus();
		}
	});


input.addEventListener('keyup', function() {
		if (event.key === 'Enter') {
			console.log("personDiv", personDiv);
			input.value = "";
		}
	});