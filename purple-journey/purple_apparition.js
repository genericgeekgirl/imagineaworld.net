	var quotes = [
		"Tes yeux, où rien ne se révèle\nDe doux ni d’amer,\nSont deux bijoux froids où se mêle\nL’or avec le fer.",

		"A lost battalion of platonic conversationalists jumping\n"+tab+"down the stoops off fire escapes off windowsills\n"
		+tab+"off Empire State out of the moon.",

		"Everything is dead, and the dead are everywhere.\nMen are alone, and all around them is silence—that is the earth!",

		"For forty years I have been listening to your words there through a crack under the floor. I have invented them myself. After all, there was nothing else I could invent.",

		"Le Prince d’Aquitaine à la tour abolie.\nThese fragments I have shored against my ruins.",

		"I'm with you in Rockland\n"+tab+
		"where fifty more shocks will never return your\n"+tab+
		"soul to its body again from its pilgrimage to a\n"+tab+
		"cross in the void",

		"This could be the start of a beautiful friendship.",

		"\"I am withdrawing to write a book.\"\n\"I am withdrawing to construct a labyrinth.\"\nEveryone imagined two works;\nto no one did it occur that the book and the labyrinth\nwere the same thing.",

		
	"Between the desire\nand the spasm\nBetween the potency\nand the existence\nBetween the essence\nand the descent\nFalls the Shadow",

		"This is the record of a box man. I am at this time beginning to write this record in my box. I am in a cardboard box that fits over my head and covers me completely to the hips.",

		"\“Do you see the eye?\” she asked me.\n\“Well?\”\n\“It’s an egg,\” she concluded in all simplicity.",

		"And the worms, they will climb\nthe crooked ladder of your spine—\nwe’re all mad here.",

		"\“Yes, Lord,\” she replied, grabbing a butcher’s knife from the kitchen.",

		"(i do not know what it is about you that closes\nand opens;only something in me understands\nthe voice of your eyes is deeper than all roses)\nnobody,not even the rain,has such small hands",

		"People with pure hearts can go to a whole new world.",

		"In the half light of dawn, in a cellar, I have cut the jugular vein of sacred bulls before the black stone. During a lunar year I have been declared invisible.",

		"The Zone wants to be respected. Otherwise, it will punish you.",

		"She has turned her face, more than once, to the Outer Radiance and simply seen nothing there. And so each time she has taken a little more of the Zero into herself.",

		"Once upon a time and a very good time it was there was a moocow coming down along the road and this moocow that was coming down along the road met a nicens little boy named baby tuckoo",

		"Silence glimmers in the empty hallways, on the radios no one listens to anymore. Silence is love just as your raspy voice is a bird.",

		"Every love story is a ghost story.",

		"The black wind howls. One among you will shortly perish."
	];

	var msgType = randInt(0, 4);

	switch(msgType) {
		case 0:
			return {text: "HURRY UP PLEASE ITS TIME.", width: null};
			break;
		case 1:
		case 2:
			var n = randInt(0, quotes.length - 1);
			return {text: quotes[n], width: quote_widths[n]};
			break;
		case 3:
		case 4:
			return {text: this.randomFact(), width: null};
			break;
	}
}

function getRandomAchievement(){ // defined by purple_apparition
		return achievement;
}

function getRandomItem(){ // defined by purple_apparition
	return item;
}

function getRandomStreet(){ // defined by purple_apparition
	return street;
}

function randomFact(){ // defined by purple_apparition

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
    "to Hauki Seeks to meet your destiny.",
    "I have hidden a secret in Nylon Phool."
}
