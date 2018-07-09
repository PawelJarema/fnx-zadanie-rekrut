var express = require('express');
var app = express();

var routes = {
	root: '/',
	news: '/',
	mobile: '/mobile'
};

var content = {
	site: 'Poxam',
	menu: {
		one : 'poznaj nas',
		two : {
			title: 'nasze marki',
			dropdown: ['marka 1', 'marka 2', 'marka 3', 'marka 4']
		},
		three : 'dla partnerów',
		four : 'kontakt'
	},
	lang: ['Pol', 'Eng'],
	title: 'aktualności',
	slider: {
		one: {
			title: 'Troska organizacji, a wykorzystanie unijnych Środków',
			message: 'W ten sposób zakup nowego sprzętu pociąga za sobą proces wdrożenia i unowocześniania obecnej sytuacji. Troska organizacji, a także wykorzystanie unijnych dotacji zabezpiecza udział szerokiej grupie w tym zakresie spełnia istotną rolę w kształtowaniu odpowiednich warunków administracyjno-finansowych.'
		}
	},
	contact: 'kontakt',
	form: {
		name: 'imię i nazwisko',
		dept: 'wybierz dział',
		copy: 'kopia wiadomosci',
		text: 'treść',
		send: 'wyślij'
	},
	accept: 'Akceptuję regulamin',
	ad: {
		title: 'Milano',
		text: 'Zawsze estetycznie i funkcjonalnie',
		buttontext: 'przejdź na '
	},
	nocontent: {
		title: 'brak treści',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
	}
}

function isMobile(req) {
	var agent = req.header('user-agent');
	return /mobile/i.test(agent); 
}

app.set('view engine', 'pug');

app.use("/views", express.static(__dirname + "/views"));

app.get('/', function (req, res) {
	if (isMobile(req)) {
		res.render('mobile', { content, routes });
	} else {
		res.render('index', { content, routes });
	}
});

app.get('/mobile', function(req, res) {
	res.render('mobile', { content, routes });
});

app.listen(8080, function() {
	console.log('STRONA DOSTĘPNA POD ADRESEM localhost:8080');
});