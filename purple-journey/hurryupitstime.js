/* Simulates the effect of the Purple Journey buff in the game Glitch. 
   Forked from ZhangYiJiang/meebleforp.js.

   Usage: hurryupitstime.start(2 * 60 * 1000); would run for two minutes
   Available as a standalone script or a bookmarklet. (See index.html)
*/

var hurryupitstime = {

    // Begins the purple madness, which will end after `duration` milliseconds.
    start: function (duration) {
	var that = this;

	if (!this.purpleOverlay) {
	    this.init();
	}

	if (!this.running) {
	    this.running = true;
	} else {
	    // Too much purple can be bad for you
	    return;
	}
	
	this.purpleIntervalId = setInterval(function(){
	    that.flashPurple();
	}, this.purpleFlashInterval);

	this.flashPurple();
	this.flashStartingText();

	this.textIntervalId = setInterval(function(){
	    var r = Math.floor(Math.random() * that.randomPhrases.length);
	    that.flashText(that.randomPhrases[r]);
	}, that.purpleFlashInterval * 2);	

	if (duration) {
	    setTimeout(function(){
		that.flashText(that.finalPhrase, 3000);
	    }, this.purpleFlashInterval + 400);
	    
	    setTimeout(function(){
		that.stop();
	    }, duration);
	}
    },

    // Stops the purple madness.
    stop: function() {	    
	this.running = false;
	
	clearInterval(this.textIntervalId);
	clearInterval(this.purpleIntervalId);
    },

    init: function () {
	var purpleOverlay = jQuery('<div>', {
	    css: this.overlayStyle
	}).hide().appendTo('body');

	var textOverlay = jQuery('<div>', {
	    css: {
		position: 'fixed', 
		top: 0, left: 0, 
		zIndex: 20000
	    }
	}).appendTo('body');

	this.purpleOverlay = purpleOverlay;
	this.textOverlay = textOverlay;
    },

    flashPurple: function () {
	this.purpleOverlay.fadeIn(500, function(){
	    jQuery(this).delay(200).fadeOut(500);
	});
    },

    flashText: function (text, duration) {
	if (!duration) duration = 2800;

	var textEle = jQuery('<span>', {
	    width: this.textWidth,
	    css: this.textStyle, 
	    text: text
	});

	var	wHeight = this.purpleOverlay.height(), 
	wWidth = this.purpleOverlay.width(), 
	textHeight = textEle.height(), 
	tries = 0, maxTries = 10; // Try, but don't try too much! 

	do {
	    textEle.offset({
		top: Math.random() * (wHeight - this.margin * 2 - textHeight) + this.margin, 
		left: Math.random() * (wWidth - this.margin * 2 - this.textWidth) + this.margin
	    });

	    tries ++;
	    // Make sure the text isn't colliding after randomizing
	} while (this.checkCollision(textEle) && tries <= maxTries);

	textEle.appendTo(this.textOverlay)
	    .fadeIn(300).delay(duration)
	    .fadeOut(600, function(){
		jQuery(this).remove();
	    });
    },

    flashStartingText: function () {
	var delay = (this.purpleFlashInterval - 400) / this.startingPhrases.length, 
	that = this;

	for (var i = 0; i < this.startingPhrases.length; i++) {
	    setTimeout(function (phrase){
		that.flashText(phrase, delay * 2);
	    }, i * delay, this.startingPhrases[i]);
	}

	setTimeout(function(){
	    that.flashText(that.finalStartingPhrase, 3000);
	}, this.purpleFlashInterval + 400);
    },

    checkCollision: function (ele) {
	var elePosition = ele.offset(), 
	foundCollision = false;

	this.textOverlay.children().each(function(){
	    var position = jQuery(this).offset();

	    if (Math.abs(elePosition.left - position.left) < this.textWidth && 
		Math.abs(elePosition.top - position.top) < ele.height()) {

		foundCollision = true;
		return;
	    }
	});

	return foundCollision;
    },

    running: false,

    textWidth: 360, 
    margin: 100,

    // The length of time between each flash in milliseconds. 
    // Default is 6000. Do not set this below 1.5 seconds.
    purpleFlashInterval: 3000, 

    // text overlay
    textStyle: {
	position: 'absolute', 
	textAlign: 'center', 
	fontSize: 34, 
	lineHeight: '34px',
	fontWeight: 'bold',
	fontFamily: 'Arial, sans-serif', 
	textShadow: '1px 1px 4px rgba(0, 0, 0, 0.9)', 
	color: '#fff',
	zIndex: 20000
    },

    // purple overlay
    overlayStyle: {
	position: 'fixed', 
	top: 0, bottom: 0, right: 0, left: 0,
	backgroundColor: 'rgba(165, 93, 204, 0.7)', 
	zIndex: 10000
    },

    startingPhrases: [	
	"You're starting to feel relaxed and kind of tingly. Actually, it's fairly pleasant.",
	"You realize you've been grinding your teeth a little. Hurry up, please; it's time.",
	"Your jaw hurts now. Your jaw hurts your hurts your your hurry up please it's its",
	"HURRY UP PLEASE ITS TIME.",
	"HURRY UP PLEASE ITS HURRY UP PLEASE ITS HURRY UP PLEASE ITS TIME",
	"NO NO NO HURRY UP NO NO ITS NO NO HURRY UP PLEASE",
	"HURRY HURRY HURRY HUR HURRY",
	"ITS TIME ITS HURRY UP ITS OH NO"
    ],

    finalStartingPhrase: "HURRY UP PLEASE ITS TIME",

    finalPhrase: "You are starting to feel a little less weird.",

    randomPhrases: [
	"Your famous pugilist grill loves you very much, but can't find the words.",
	"The magic beans are waging an endless and bloody war against the flamingo eyedrops.",
	"Beware the replica canoes.",
	"The tree poison antidote in your home is conspiring against you.",
	"The music block DB-5 in your home feels neglected. Please hug it.",
	"The consumptive raccoons are best of friends with the terrifying knees.",
	"Your shovel is cursed. It is the source of all your problems.",
	"You must become one with your small shiny object with no intrinsic value.",
	"Did you feel accomplished when you received the delirious foxbrusher badge?",
	"The gloopmeister badge is not what it seems.",
	"The high-ranking supplicant badge is grape-flavoured.",
	"Do you ever miss Ruta Asuncion? You can go back there, but you can never really go back there.",
	"Return to Hauki Seeks to meet your destiny.",
	"I have hidden a secret in Nylon Phool."
    ]
};
