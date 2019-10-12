const Discord = require('discord.js');	
	const client = new Discord.Client();
	
	const token = 'NjMyNTY2NzEyMDc1NTUwNzIx.XaJOtw.SypUBsLbY2bxQoewHtmrcp6uN44'
	usedCommandRecently4 = new Set();
	
	client.on('ready', () =>{
	console.log('gen bot is now online')
	client.user.setPresence({ game: { name: `${client.guilds.size} EZ`, type: "Playing"}});
	});
	client.on('message', message =>{
	if (message.content === 'hello'){
	message.author.send('hi');
	};
	});
	client.on('message', message =>{
	if (!message.guild) return;
	if (message.content === '=test'){
	if (usedCommandRecently4.has(message.author.id)){
	message.channel.send('Cooldown Message')
	} else{
	usedCommandRecently4.add(message.author.id);
	setTimeout(() =>{
	usedCommandRecently4.delete(message.author.id);
	}, 10000)
	var string = `test1
	test2
	test3
	test4
	test5`
	var words = string.split('\n');
	let random = words[Math.floor(Math.random()*words.length)];
	message.author.send(`${random}`);
	};
	};
	});
	client.login(token);
