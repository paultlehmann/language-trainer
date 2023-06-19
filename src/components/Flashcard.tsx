import { Card } from '@mui/material';
// import SentenceCard from './SentenceCard'
import SingleWordCard from './SingleWordCard';
import { getRandomWord } from '../util/word';
import {
  ILanguageConfig,
  TFlashcardType,
  TLearningLanguage,
  TSourceLanguage,
  TWordType
} from '../types';

interface IFlashcardProps {
  cardType: TFlashcardType;
  config: ILanguageConfig;
  learningLanguage: TLearningLanguage;
  sourceLanguage: TSourceLanguage;
  style: any;
}

const Flashcard = (props: IFlashcardProps) => {
  const { cardType, config, learningLanguage, sourceLanguage } = props;

  const { words, rules } = config;

  const wordType = [
    'adj' as TWordType,
    'noun' as TWordType,
    'verb' as TWordType
  ][Math.floor(Math.random() * 3)];

  const { learningLanguageWord, sourceLanguageWord } = getRandomWord(
    words,
    wordType,
    rules.articles.def
  );

  const interactive = false;

  // const buildSentence = (lang: TLearningLanguage | TSourceLanguage) => {

  // }

  // const learningLanguageSentence = buildSentence()

  const getFlashcard = (cardType: TFlashcardType) => {
    switch (cardType) {
      // case 'sentenceQuiz':
      //   <SentenceCard
      //   learningLanguage={learningLanguage}
      //   sourceLanguage={sourceLanguage}
      //   learningLanguageSentence={learningLanguageSentence}
      //   sourceLanguageSentence={sourceLanguageSentence}
      //   />
      case 'singleWord':
      default:
        return (
          <SingleWordCard
            interactive={interactive}
            learningLanguage={learningLanguage}
            sourceLanguage={sourceLanguage}
            learningLanguageWord={learningLanguageWord}
            sourceLanguageWord={sourceLanguageWord}
          />
        );
    }
  };

  return (
    <Card
      sx={{
        width: 350,
        justifyContent: 'center',
        // margin: '0 auto',
        display: 'grid'
      }}
    >
      {getFlashcard(cardType)}
    </Card>
  );
};

export default Flashcard;
