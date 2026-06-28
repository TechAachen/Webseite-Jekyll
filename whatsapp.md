---
layout: paperwork
title:  "WhatsApp"
permalink: whatsapp.html
---

## Disclaimer

#### § 1 Warnhinweis zu der Nutzung von WhatsApp
Messenger-Dienste wie WhatsApp erheben nach der Installation personenbezogene Daten auf den Endgeräten der Nutzerinnen und Nutzer. Hierbei sind insbesondere die von den jeweiligen Nutzerinnen und Nutzern gespeicherten Kontakte relevant, die von WhatsApp alle ausgelesen und verknüpft werden. Zudem werden die von WhatsApp erhobenen Daten auf Servern außerhalb der Europäischen Union gespeichert, somit ist die Sicherheit dieser Daten nicht im erforderlichen Maße gegeben. Sofern also du nur für die Kommunikation im Verein die App installierst, solltest du dich über diese Verarbeitung der Daten aller gespeicherten Kontakte im Klaren sein. Auf die Datenerhebung von WhatsApp und Co. können wir keinen Einfluss nehmen und du kannst ebendiese Informationen bei dem Betreiber von WhatsApp abrufen und dich über den Datenschutz informieren.

#### § 2 Nutzung von WhatsApp
Die Nutzung von WhatsApp als zusätzlicher Kommunikationskanal ist die Erweiterung der bestehenden Kommunikationsmittel in Form des E-Mail-Verteilers und/oder Zulip, die für alle Mitglieder der Mitgliedsvereinen verfügbar sind. Für die Nutzung von WhatsApp als Kommunikationsmittel musst du deine Einwilligung erteilen. Dir sollte bewusst sein, dass deine Nicht-Erteilung keine negativen Folgen hat und die anderen Kommunikationsmittel genauso einfach zu benutzen sind. Sofern du Minderjährig bzw. unter 16 Jahre alt bist, benötigst du die Einwilligung der Träger der elterlichen Verantwortung (oftmals beide Elternteile).

Bei der Nutzung von WhatsApp sollte dir ebenfalls bewusst sein, dass den Mitgliedsvereinen außenstehende Personen eventuell mitlesen können. Nach der ursprünglichen Überprüfung und dem Hinzufügen der Mitglieder in die WhatsApp Community/Gruppe erfolgt keine regelmäßige Überprüfung, ob die Personen in einem der Mitgliedsvereinen sind. Teile entsprechend nur Daten und Informationen, die du der Öffentlichkeit teilen möchtest.

#### § 3 Zugang zu den WhatsApp Gruppen/zu der WhatsApp Community
Um Zugang zu WhatsApp zu erhalten, musst du uns deinen Namen, deinen Verein (der bei uns Mitglied ist) und deine Telefonnummer, die du bei WhatsApp nutzt, in einer E-Mail schreiben, in der du den Warnhinweisen und Nutzungshinweisen von oben zustimmst. Über die Felder und den Button unten kannst du die vorgeschriebene Nachricht an uns übermitteln und solltest den Text nicht ändern, damit uns die Überprüfung, ob du Teil von TechAachen bist, einfacher gestaltet wird. Du bist Teil von TechAachen, wenn du in mind. einem der [Mitgliedsvereinen]({{ '/aboutus.html' | relative_url }}) Mitglied bist. In der Regel solltest du innerhalb einer Woche hinzugefügt werden. Sollte deine E-Mail im Spamfilter gelandet sein und wir fügen dich innerhalb der Zeit nicht hinzu, kontaktiere uns gerne über den Vorstand deines Mitgliedsvereins oder den Vorstand von TechAachen persönlich.

#### § 4 Hinweise zur Nutzung
Der TechAachen wurde mit dem Ziel gegründet, die Mitglieder der technischen Initiativen zu vernetzen. Dabei kümmern wir uns um die Interessensvertretung von euch gegenüber der Hochschulen, der Stadt und allen weiteren Parteien und können als Verband oft mehr erreichen als ein Verein alleine. Genauso wichtig ist das Teilen von Wissen und Erfahrungen, die ihr in euren Initiativen gesammelt und erlebt habt. Das kann in Form von kurzen Textnachrichten, Fragen, Workshops von Initiativen und Firmen, sowie durch Veranstaltungsformate und vielem mehr realisiert werden. Nutz das Netzwerk um dir und anderen das Leben zu vereinfachen und gemeinsam Projekte zu starten und zu realisieren. Denk daran, dass wir alle freiwillig und ehrenamtlich an den Projekten arbeiten und erwarte nicht, dass zu jedem Problem eine Lösung von anderen kommt; versuch aber genauso anderen zu helfen in dem Rahmen, wie es dir möglich ist. Denn jedes der Projekte ist die Herzensangelegenheit der Mitglieder und verdient es, unterstützt zu werden.


<h3>Deine Daten</h3>

<div class="form-group mb-3">
  <label for="name">Name</label>
  <input type="text" id="name" class="form-control" placeholder="Dein Name">
</div>

<div class="form-group mb-3">
  <label for="verein">Verein</label>
  <input type="text" id="verein" class="form-control" placeholder="Dein Verein">
</div>

<div class="form-group mb-3">
  <label for="telefon">Telefonnummer</label>
  <input type="text" id="telefon" class="form-control" placeholder="Deine Telefonnummer">
</div>



<div class="text-center mt-4">
  <button class="btn btn-primary" onclick="sendMail()">E-Mail generieren</button>
</div>



<script>
function sendMail() {
  const name = document.getElementById("name").value;
  const verein = document.getElementById("verein").value;
  const telefon = document.getElementById("telefon").value;

if (!name || !verein || !telefon) {
  alert("Bitte fülle alle Felder aus.");
  return;
}
  
  const empfaenger = "whatsapp@techaachen.rwth-aachen.de";
  const betreff = "Zugang WhatsApp TechAachen";

  const text = `Lieber TechAachen Vorstand,

mir ist bewusst und ich akzeptiere, dass Messenger-Dienste wie WhatsApp nach der Installation personenbezogene Daten auf den Endgeräten der Nutzerinnen und Nutzer erheben. Hierbei sind insbesondere die von den jeweiligen Nutzerinnen und Nutzern gespeicherten Kontakte relevant, die von WhatsApp alle ausgelesen und verknüpft werden. Zudem werden die von WhatsApp erhobenen Daten auf Servern außerhalb der Europäischen Union gespeichert, somit ist die Sicherheit dieser Daten nicht im erforderlichen Maße gegeben. Sofern ich also nur für die Kommunikation im Verein die App installiere, bin ich mir über diese Verarbeitung der Daten aller gespeicherten Kontakte im Klaren. Mir ist bewusst, dass TechAachen auf die Datenerhebung von WhatsApp und Co. keinen Einfluss nehmen kann und ich ebendiese Informationen bei dem Betreiber von WhatsApp abrufen und mich über den Datenschutz informieren kann.
Ich bestätige, dass ich über 18 Jahre alt bin und falls ich unter 16 Jahre alt bin, füge ich das Einverständnis meiner Träger der elterlichen Verantwortung bei.
Mir ist bewusst, dass die Nutzung von WhatsApp als zusätzlicher Kommunikationskanal die Erweiterung der bestehenden Kommunikationsmittel in Form des E-Mail-Verteilers techaachen-members@lists.rwth-aachen.de und/oder Zulip, die für alle Mitglieder der Mitgliedsvereinen verfügbar sind. Für die Nutzung von WhatsApp als Kommunikationsmittel erteile ich meine Einwilligung. Mir ist bewusst, dass meine Nicht-Erteilung keine negativen Folgen hat und die anderen Kommunikationsmittel genauso einfach zu benutzen sind.
Mir ist ebenfalls bewusst, dass bei der Nutzung von WhatsApp, den Mitgliedsvereinen außenstehende Personen eventuell mitlesen können. Nach der ursprünglichen Überprüfung und dem Hinzufügen der Mitglieder in die WhatsApp Community/Gruppe erfolgt keine regelmäßige Überprüfung, ob die Personen in einem der Mitgliedsvereinen sind. Ich teile entsprechend nur Daten und Informationen, die ich der Öffentlichkeit teilen möchte.

Name: ${name}
Verein: ${verein}
Telefonnummer: ${telefon}

Ich habe die Hinweise zur Nutzung von WhatsApp gelesen und stimme diesen zu.

Viele Grüße
${name}
`;

  const mailtoLink = `mailto:${empfaenger}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(text)}`;

  window.location.href = mailtoLink;
}
</script>


Sollte die E-Mail-Generierung nicht funktionieren, kannst du auch folgenden Text mit den erforderlichen Werten ergänzen (beginnend mit $) und an whatsapp@techaachen.rwth-aachen.de schicken.

Lieber TechAachen Vorstand,

mir ist bewusst und ich akzeptiere, dass Messenger-Dienste wie WhatsApp nach der Installation personenbezogene Daten auf den Endgeräten der Nutzerinnen und Nutzer erheben. Hierbei sind insbesondere die von den jeweiligen Nutzerinnen und Nutzern gespeicherten Kontakte relevant, die von WhatsApp alle ausgelesen und verknüpft werden. Zudem werden die von WhatsApp erhobenen Daten auf Servern außerhalb der Europäischen Union gespeichert, somit ist die Sicherheit dieser Daten nicht im erforderlichen Maße gegeben. Sofern ich also nur für die Kommunikation im Verein die App installiere, bin ich mir über diese Verarbeitung der Daten aller gespeicherten Kontakte im Klaren. Mir ist bewusst, dass TechAachen auf die Datenerhebung von WhatsApp und Co. keinen Einfluss nehmen kann und ich ebendiese Informationen bei dem Betreiber von WhatsApp abrufen und mich über den Datenschutz informieren kann.
Ich bestätige, dass ich über 18 Jahre alt bin und falls ich unter 16 Jahre alt bin, füge ich das Einverständnis meiner Träger der elterlichen Verantwortung bei.
Mir ist bewusst, dass die Nutzung von WhatsApp als zusätzlicher Kommunikationskanal die Erweiterung der bestehenden Kommunikationsmittel in Form des E-Mail-Verteilers techaachen-members@lists.rwth-aachen.de und/oder Zulip, die für alle Mitglieder der Mitgliedsvereinen verfügbar sind. Für die Nutzung von WhatsApp als Kommunikationsmittel erteile ich meine Einwilligung. Mir ist bewusst, dass meine Nicht-Erteilung keine negativen Folgen hat und die anderen Kommunikationsmittel genauso einfach zu benutzen sind.
Mir ist ebenfalls bewusst, dass bei der Nutzung von WhatsApp, den Mitgliedsvereinen außenstehende Personen eventuell mitlesen können. Nach der ursprünglichen Überprüfung und dem Hinzufügen der Mitglieder in die WhatsApp Community/Gruppe erfolgt keine regelmäßige Überprüfung, ob die Personen in einem der Mitgliedsvereinen sind. Ich teile entsprechend nur Daten und Informationen, die ich der Öffentlichkeit teilen möchte.

Name: $name
Verein: $verein
Telefonnummer: $telefon

Ich habe die Hinweise zur Nutzung von WhatsApp gelesen und stimme diesen zu.

Viele Grüße
$name
