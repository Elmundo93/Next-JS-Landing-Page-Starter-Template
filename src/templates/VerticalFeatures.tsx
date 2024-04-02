import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Unser Ziel"
    description="Wir vom 'Wir helfen aus e.V.' glauben daran, dass wir mit unserem Netzwerk die Helferkultur auf regionaler Ebene fördern. Viele Aufgaben lassen sich mit mehr Händen schneller bewältigen & deshalb verbinden wir Menschen mit unserer App!"
  >
    <VerticalFeatureRow
      title="Hilfe für Eigentümer"
      description="Im Alltag fallen regelmäßig Arbeiten an, das kennen wir alle. & vor allem als Eigentümer können diese Alltagspflichten, je nach Art, mehr Arbeitskraft fordern als im Haus vertreten ist. Wenn dann auch noch der Nachbar keine Zeit hat, steht man vor einer eigentlich vergnügsamen Aufgabe, welche zum stressigen Wochen-, oder vielleicht sogar Monatsprojekt wird."
      image="/assets/images/img_eigentümer.jpg.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Hilfe für beeinträchtigte Menschen oder Senioren"
      description="Kleinere Aufgaben wie Gassie gehen, Einkaufen oder sich um den Garten kümmern, werden für Menschen mit einer Beeinträchtigung oft schon zu einem Problem. Hier reichen oft schon kleine Hilfestellungen um einen imensen Unterschied in der Lebensqualität zu erzielen."
      image="/assets/images/img_senioren.jpg.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Hilfe beim Prozess"
      description="Ist dann eine helfende Hand gefunden, kommen fragen auf wie:'Falls denn was passiert, ist man denn dann Versichert?'
      Bei Fragen jeder Art stehen wir als Verein ihnen zur Seite. Des weiteren finden Sie alle nötigen Links zur Minijob-Zentrale bei uns auf der Homepage."
      image="/assets/images/process_img.jpg.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
