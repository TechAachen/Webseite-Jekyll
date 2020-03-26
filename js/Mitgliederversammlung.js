---
---

function futureDate(a) {
	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	return a[0] > yesterday;
}

function sortDates(a,b) {
	return a[0] - b[0];
}

function Mitgliederversammlung() {
	var termine = [
	{% for termin in site.data.mitgliederversammlung_kalender -%}
	[new Date('{{ termin.datum }}'), '{{ termin.uhrzeit }}', '{{ termin.ort }}'],
	{% endfor -%}
	];

	var next_meeting = termine.filter(futureDate).sort(sortDates)[0];

    document.getElementById("mitgliederversammlung_text").innerHTML =
    	"Die nächste <i>Geschäftsführende Mitgliederversammlung</i> findet am " +
    	next_meeting[0].toLocaleDateString("de-DE", {day: "numeric", month: 'long', year: "numeric"}) +
    	" um " + next_meeting[1] +
    	" statt. </br>" +
    	"Versammlungsort: " + next_meeting[2];

}

Mitgliederversammlung();
