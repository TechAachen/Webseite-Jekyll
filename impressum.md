---
layout: paperwork
title:  "Impressum"
permalink: impressum.html
---

**Anschrift:**  
{{site.contact_address}}

**E-Mail:** [{{site.email}}](mailto:{{site.email}})  

**Gemeinschaftlich vertretungsberechtigt sind jeweils zwei gemeinsam:**
{% assign persons = site.data.persons | sort: 'order' -%}
{% for person in persons %} {% if person.active -%} {% if person.boardmember -%}
<br>{{person.function}}: {{person.name}}
{% endif %}{% endif %}{% endfor %}

**Registereintrag**  
Eingetragen im Vereinsregister.  
Registergericht: Amtsgericht Aachen  
<!-- Registernummer: VR ???? -->

**Das Impressum gilt für**  
[techaachen.de](https://techaachen.de/)

**Verantwortlicher für journalistisch-redaktionelle Inhalte iSd. § 55 II RStV:**  
{% assign person = site.data.persons | first -%}
{{person.name}}, {{site.email}}

---

## Disclaimer

#### § 1 Warnhinweis zu Inhalten
Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.

#### § 2 Externe Links
Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.

#### § 3 Urheber- und Leistungsschutzrechte
Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.

Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.

#### § 4 Besondere Nutzungsbedingungen
Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.

Quelle des Disclaimers: [Impressum Vorlage von JuraForum.de](https://www.juraforum.de/impressum-generator/)

---
