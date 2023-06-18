import { Card, CardContent, Typography } from '../mui';
import { IArticlesByGender, ILanguageConfig, INoun, IWord, IWords, TCase, TWordType } from '../types';

type TSourceLanguage = 'en'
type TLearningLanguage = 'de' | 'ru'

interface IFlashcardProps {
    config: ILanguageConfig;
    learningLanguage: TLearningLanguage;
    sourceLanguage?: TSourceLanguage;
    style: any
}

const getArticle = (noun: INoun, gCase: TCase, articleConfig: IArticlesByGender) => {
  return articleConfig[noun.gender][gCase]
}

const getWord = (type: TWordType, lang: TSourceLanguage | TLearningLanguage, wordInfo: IWord, articleConfig: IArticlesByGender) => {
  if (lang === 'de' && type === 'noun') {
    return `${getArticle(wordInfo as INoun, 'nom', articleConfig)} ${wordInfo[lang]}`
  } else if (lang === 'en' && type === 'verb') {
    return `to ${wordInfo[lang]}`
  } else {
    return wordInfo[lang]
  }
}

const getRandomWord = (words: IWords, type: TWordType, articleConfig: IArticlesByGender) => {
  const wordInfo = words[type][Math.floor(Math.random() * words[type].length)]
  const learningLanguageWord = getWord(type, 'de', wordInfo, articleConfig)
  const sourceLanguageWord = getWord(type, 'en', wordInfo, articleConfig)
  return { learningLanguageWord, sourceLanguageWord }
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