var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene ({
	triggerElement: '#trigger1'	
})
.setTween('#animate1', 0.5, {backgroundColor:'green', scale: 2.5})
.addIndicators({name: "1 - this is one"})
.addTo(controller); 



//CV PAGE
var tweenOne = TweenMax.staggerTo(".two", 1, {rotation:3, x:350}, 0.5);
var tweenTwo = TweenMax.staggerTo(".one", 1, {rotation:-3, x:-350}, 0.5);

var scene3 = new ScrollMagic.Scene ({
	triggerElement: '#trigger3'
})
.setTween(tweenOne)
.addIndicators({name: "3 - well"})
.addTo(controller);

var scene3 = new ScrollMagic.Scene ({
	triggerElement: '#trigger3'
})
.setTween(tweenTwo)
.addIndicators({name: "3 - well"})
.addTo(controller);

//end cv page


//test thingy section 5
var noteTween2 = TweenMax.staggerTo("#sticky2", 1, {rotation: 380, y:-75}, 0.5);

var scene4 = new ScrollMagic.Scene ({
	triggerElement: "#trigger4"
})
.setTween(noteTween2)
.addTo(controller);

var noteTween = TweenMax.staggerTo("#sticky1", 1, {rotation: 350, y:-100}, 0.5);

var scene4 = new ScrollMagic.Scene ({
	triggerElement: "#trigger4"
})
.setTween(noteTween)
.addIndicators({name: "KO KO DESU"})
.addTo(controller);

