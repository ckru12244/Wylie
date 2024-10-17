window.addEventListener("load", function(){

	// AOS
	AOS.init({
		duration: 1000,
		once: true
	});
	let mainTitle=document.querySelector("#start .title");

	setTimeout(function(){
		mainTitle.classList.add("active");
	}, 500);
	
	// mobile menu
	let body=document.body;
	let tab=document.querySelector(".tab");
	let dim=document.querySelector(".dim");
	let mobile=document.querySelector("#mobile");
	let header=document.querySelector("header");

	tab.addEventListener("click", function(e){
		e.preventDefault();

		if(tab.classList.contains("close") == false){
			tab.classList.add("close");			
			body.classList.add("fixed");
			dim.classList.add("active");

			gsap.to(tab, {x: -280, duration: 0.3});
			gsap.to(mobile, {right: 0, duration:0.3});
		}
		else{
			tab.classList.remove("close");			
			body.classList.remove("fixed");
			dim.classList.remove("active");

			gsap.to(tab, {x: 0, duration: 0.3});
			gsap.to(mobile, {right: -280, duration:0.3});
		}
	});

	dim.addEventListener("click", function(e){
		e.preventDefault();

		body.classList.remove("fixed");
		mobile.classList.remove("active");
		dim.classList.remove("active");		
		tab.classList.remove("close");
	});

	window.addEventListener("resize", function(){
		if(window.innerWidth > 720){
			if(tab.classList.contains("close") == true){
				body.classList.remove("fixed");
				dim.classList.remove("active");		
				tab.classList.remove("close");
				
				gsap.to(tab, {x: 0, duration: 0.3});
				gsap.to(mobile, {right: -280, duration:0.3});
			}
		}
	});

	window.addEventListener("scroll", function(){
		if(window.scrollY > 200){
			if(header.classList.contains("fixed") == false){
				header.classList.add("fixed");
				gsap.fromTo(header, {top: -60}, {top: 0, duration: 0.3, delay: 0.5});
			}
			else{
				header.classList.add("fixed");
			}
		}
	});
});