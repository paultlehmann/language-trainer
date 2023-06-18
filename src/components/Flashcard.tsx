import { Card, CardContent, Typography } from '../mui';
import { getRandomWord } from '../util/word';
import { ILanguageConfig, TLearningLanguage, TSourceLanguage, TWordType } from '../types';

interface IFlashcardProps {
    config: ILanguageConfig;
    learningLanguage: TLearningLanguage;
    sourceLanguage?: TSourceLanguage;
    style: any
}

const Flashcard = (props: IFlashcardProps) => {
    const {
        config,
        learningLanguage,
        sourceLanguage = 'en'
    } = props;

    const { words, rules } = config

    const wordType = ['adj' as TWordType, 'noun' as TWordType, 'verb' as TWordType][Math.floor(Math.random() * 3)]

    const { learningLanguageWord, sourceLanguageWord } = getRandomWord(words, wordType, rules.articles.def)

  return (
    <Card sx={{ width: 350,
      justifyContent: 'center',
      // margin: '0 auto',
      display: 'grid' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}>
          {sourceLanguage}
        </Typography>
        <Typography variant="h5">
          {sourceLanguageWord}
        </Typography>
        <Typography sx={{ fontSize: 14, marginTop: '20px' }}>
          {learningLanguage}
        </Typography>
        <Typography variant="h5">
            {learningLanguageWord}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Flashcard;