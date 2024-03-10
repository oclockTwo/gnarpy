import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qa = [
  {
    question: "What is Gnarpy?",
    answer:
      "Gnarpy is an NPC character in the game regretevator, which is a game developed using the Roblox platform and published on it, created by a developer called The Axolotl Sun",
    id: 0,
  },
  {
    question: "Gnarpy's origin?",
    answer:
      "Gnarpy was first designed by AFRMation on Twitter but was redesigned due to their negative reputation. Before being added to the game, Gnarpy was a Regretevator OC (original character). Gnarpy's image was inspired by the :gnarpy: emoji in The Axolotl Sun official Discord server, created by pizzacruzt on Discord.",
    id: 1,
  },
  {
    question: 'How to obtain the "CRASH LANDING" badge?',
    answer:
      "Players can get the “Crash Landing” badge the first time they encounter Gnarpy. If a player dies before the UFO invasion event ends, they cannot get the badge, meaning they must survive to get it.",
    id: 2,
  },
  {
    question: "Can Gnarpy sit?",
    answer:
      "Currently, Gnarpy does not have a sitting animation. Instead, xe stands and slides on the Slide 4 Admin floor.",
    id: 3,
  },
  {
    question: "When will Gnarpy not enter the elevator?",
    answer:
      "Gnarpy will not enter the elevator if MR is inside; instead, xe will keep running, probably looking for another place to hide.",
    id: 4,
  },
  {
    question: "How many models does Gnarpy have?",
    answer:
      "There are four models in total, making Gnarpy the NPC with the most models.",
    id: 5,
  },
  {
    question: "What merchandise does Gnarpy have?",
    answer:
      "There are currently six pieces of merchandise available for purchase: “Gnarpy's left shoulder fur,” “Gnarpy's right shoulder fur,” “Gnarpy's neck fur,” “Gnarpy's face fur,” “Gnarpy's ears,” and “Gnarpy's head fur.” Other merchandise was pulled due to some design disputes.",
    id: 6,
  },
  {
    question: "Gnarpy's voice inspiration and source:",
    answer:
      "Gnarpy's previous audio when hit by a snowball or sprayed with water originally came from Deltarune. Specifically, it was Noelle's scream when Maus approaches her in the mouse puzzle room. Gnarpy's speaking audio originally came from a video of “the person who forgot to turn off the voice changer during class.” According to this person, xe accidentally hit the Synth effect on the Roland VT-3 voice processor before asking a question, making their voice sound like that in the video. In the game, this voice's speed is increased by about 25%.",
    id: 7,
  },
  {
    question: "Where will Gnarpy leave the elevator?",
    answer:
      "Gnarpy will leave the elevator on the turret floor. Players are allowed to give xem a coin. However, if they do, nothing happens.",
    id: 8,
  },
  {
    question: "What is Gnarpy's gender?",
    answer: "Gnarpy is genderless, so xry/xe pronouns are used.",
    id: 9,
  },
  {
    question: "What is Gnarpy's age?",
    answer:
      "The birthday is August 9, but no specific year is given. However, the game's creation year (2020) can be considered for calculation.",
    id: 10,
  },
  {
    question: "Where is Gnarpy from?",
    answer:
      "Gnarpy is from the non-existent planet Gars. According to The Axolotl Sun, the creator of the regretevator game, Gnarpy is evil.",
    id: 11,
  },
  {
    question: "Gnarpy's species?",
    answer:
      "Gnarpians are divided into several ranks: citizens, soldiers, deputy leaders, and main leaders, each with predetermined roles. Each army can have up to two deputy leaders, depending on how much work they need to do. The blue ships on the ground are soldier gnarpians and are blue. Gnarpy is listed as a joint leader in the Gnarpian army, which makes xem special. Gnarpians can communicate with other creatures like them. It is said that Gnarpy and/or Gnarpians greet other similar characters by tapping their faces with their whiskers.",
    id: 12,
  },
  {
    question: "Gnarpy's favorite food?",
    answer: "Gnarpian glorpnorps, and xis favorite type of food is fruit.",
    id: 13,
  },
  {
    question: "Gnarpy's favorite music?",
    answer: "Death metal.",
    id: 14,
  },
];

export default function Faq() {
  return (
    <Accordion type="single" collapsible>
      {qa.map((item) => (
        <AccordionItem value={`item-${item.id}`} key={item.id}>
          <AccordionTrigger className="text-lg font-bold">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
