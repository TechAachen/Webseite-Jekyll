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

function isVersammlung(a) {
    return a[3].includes("Geschäftsführende Versammlung");
}

function Mitgliederversammlung() {
    var termine = [
    {% for termin in site.data.calendar -%}
    [new Date('{{ termin.datum }}'), '{{ termin.uhrzeit }}', '{{ termin.ort }}', '{{ termin.title }}'],
    {% endfor -%}
    ];

    var next_meeting = termine.filter(futureDate).filter(isVersammlung).sort(sortDates)[0];

    document.getElementById("mitgliederversammlung_text").innerHTML =
        "Die nächste <i>" + next_meeting[3] + "</i> findet am " +
        next_meeting[0].toLocaleDateString("de-DE", {day: "numeric", month: 'long', year: "numeric"}) +
        " um " + next_meeting[1] +
        " statt. <br />" +
        "Versammlungsort: " + next_meeting[2];
}

Mitgliederversammlung();
