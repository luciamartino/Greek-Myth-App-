import { useState } from "react"

import { Questions } from "./Questions";

export function App(){

const [ score, setScore ] = useState(0)

    function handleAnswerSent(event){
        event.preventDefault()
        if (event.target.value == "correct"){
            setScore(score ++)
        }
    }

    return(
        <>
        <form className="formbox" onSubmit={handleAnswerSent}>
            <Questions question={"1. What were the three sisters, known as Moiras, responsible for?"}
            answer1={"The fate of the men"} value={"correct"}
            answer2={"Era the goddess clothes"}
            answer3={"Gossip from Olimpo"}
            answer4={"Dancing for the gods"}/>
            <Questions question={"2. The three Erins were the goddesses of revenge, what were their names?11"}
            answer1={"Viper, Lugubrous and Aspiri"}
            answer2={"Circe, Pamfile and Ecate"}
            answer3={"Anastasia, Drizella and Tizia"}
            answer4={"Aletto, Tisifone and Megera"} value={"correct"}
            />
            <Questions question={"3. Who fell in love with the beautiful Persephone, Demetra’s daughter, and kidnapped her?"}
            answer1={"Ares"}
            answer2={"Ade"} value={"correct"}
            answer3={"Eros"}
            answer4={"Efesto"}
            />
            <Questions question={"4. What deal did Persephone have to accept in order to come back to her mother?"}
            answer1={"Stay six months of the year with his husband"} value={"correct"}
            answer2={"Deliver fresh fruit every four months"}
            answer3={"Never eating sweets again"}
            />
            <Questions question={"5. Where was Aphrodite, the love goddess, born?"}
            answer1={"From a dove egg"}
            answer2={"From a rose bush"}
            answer3={"From the foam of the see"} value={"correct"}
            answer4={"From a breath of the wind"}
            />
            <Questions question={"6. With whom was Aphrodite in love the most?"}
            answer1={"Ares, god of the war"} value={"correct"}
            answer2={"Zeus, lord of the god"}
            answer3={"Eracle the hero"}
            answer4={"Elio, god of the sun"}
            />
            <Questions question={"7.Who forced Atlante to hold the vault of heaven on his shoulders?"}
            answer1={"Ares, for a bet"}
            answer2={"His brother for revenge"}
            answer3={"Zeus after the war against the Titans"} value={"correct"}
            answer4={"The Earth at the begging of time"}
            />
            <Questions question={"8. Who took Atlante’s place for a bit in his hard task?"}
            answer1={"Eracle the hero"} value={"correct"}
            answer2={"Crono the god"}
            answer3={"His brother Prometeo"}
            answer4={"Polifemo the cyclop"}
            />
            <Questions question={"9. The Centaurs, half-man, half-horse, were monsters that behaved in a manner...?"}
            answer1={"Polite and courteous"}
            answer2={"Crude and quarrelsome"} value={"correct"}
            answer3={"Cold and aloof"}
            answer4={"Cunning and disloyal"}
            />
            <Questions question={"10. One day, the centaur Pholus fell in love with Delanira, wife of Heracles, an..?"}
            answer1={"He transformed her into Centauressa"}
            answer2={"She divorced Heracles"}
            answer3={"They had a secret affair"}
            answer4={"He tried to kidnap her"} value={"correct"}
            />
            <Questions question={"11. Artemis, the huntress goddess who lived in the woods, never married, why?"}
            answer1={"She wanted no man"} value={"correct"}
            answer2={"No god fell in love with her"}
            answer3={"The goddess Hera cursed her"}
            answer4={"She could not make up her mind"}
            />
            <Questions question={"12. The nymph Callisto, from Artemis' retinue, was transformed into an animal. Which one?"}
            answer1={"A bear"} value={"correct"}
            answer2={"A doe"}
            answer3={"A mole"}
            answer4={"A whale"}
            />
            <Questions question={"13. The god of fire, Hephaestus, lived underground where he worked as a blacksmith. What did he make?"}
            answer1={"Magic wands for goddesses"}
            answer2={"Gates to the Underworld"}
            answer3={"Invincible weapons for gods and heroes"} value={"correct"}
            answer4={"Cutlery for the banquets of Zeus"}
            />
            <Questions question={"14. Who was the wife of the ugly and deformed Hephaestus?"}
            answer1={"The ancient goddess of the Earth"}
            answer2={"The beautiful goddess of love"} value={"correct"}
            answer3={"The old goddess of destiny"}
            answer4={"The hideous sister of the Minotaur"}
            />
            <Questions question={"15. Against whom did Arachne compete in weaving the most beautiful cloth?"}
            answer1={"Against the queen of Colophon"}
            answer2={"Against the goddess Athena"} value={"correct"}
            answer3={"Against the sorceress Circe"}
            answer4={"Against her slave"}
            />
            <Questions question={"16. What was the fate that befell the winner at the end of the challenge?"}
            answer1={"Her hands were cut off"}
            answer2={"She became the constellation Ursa Minor"}
            answer3={"She was turned into a spider"} value={"correct"}
            />
            <Questions question={"17. Theseus arrived in Crete to fight the Minotaur. Where did he come from?"}
            answer1={"From Athena"} value={"correct"}
            answer2={"From Sparta"}
            answer3={"From Ithaca"}
            answer4={"From Rome"}
            />
            <Questions question={"18. Who helped Theseus defeat the Minotaur and escape from the labyrinth?"}
            answer1={"The son of the king of Crete"}
            answer2={"The daughter of the king of Crete"} value={"correct"}
            answer3={"The father of the Minotaur"}
            answer4={"The whole population of Crete"}
            />
            <Questions question={"19. Who did Perseus meet before he went to the cave of the terrible Gorgons?"}
            answer1={"The three beautiful Graces"}
            answer2={"The three old Graeae"} value={"correct"}
            answer3={"A snake charmer"}
            answer4={"A talking goat"}
            />
            <Questions question={"20. What did Perseus use to avoid being petrified by Medusa's gaze?"}
            answer1={"A magic mirror"}
            answer2={"A hideous portrait of Medusa herself"}
            answer3={"The shield of the goddess Athena"} value={"correct"}
            />
            <button type="submit">send</button>

        </form>
        <footer>{score}</footer>

        </>
    )
}