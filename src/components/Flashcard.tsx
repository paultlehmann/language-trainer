import { Card } from '../mui';
import SingleWordCard from './SingleWordCard';
import { getRandomWord } from '../util/word';
import { ILanguageConfig, TFlashcardType, TLearningLanguage, TSourceLanguage, TWordType } from '../types';

interface IFlashcardProps {
    cardType: TFlashcardType;
    config: ILanguageConfig;
    learningLanguage: TLearningLanguage;
    sourceLanguage?: TSourceLanguage;
    style: any
}

const Flashcard = (props: IFlashcardProps) => {
    const {
        cardType,
        config,
        learningLanguage,
        sourceLanguage = 'en'
    } = props;

    const { words, rules } = config

    const wordType = ['adj' as TWordType, 'noun' as TWordType, 'verb' as TWordType][Math.floor(Math.random() * 3)]

    const { learningLanguageWord, sourceLanguageWord } = getRandomWord(words, wordType, rules.articles.def)

    const getFlashcard = (cardType: TFlashcardType) => {
      switch(cardType) {
        case 'singleWord':
        default:
          return <SingleWordCard learningLanguage={learningLanguage} sourceLanguage={sourceLanguage} learningLanguageWord={learningLanguageWord} sourceLanguageWord={sourceLanguageWord} />
      }
    }

  return (
    <Card sx={{ width: 350,
      justifyContent: 'center',
      // margin: '0 auto',
      display: 'grid' }}>
      {getFlashcard(cardType)}
    </Card>
  );
}

export default Flashcard;