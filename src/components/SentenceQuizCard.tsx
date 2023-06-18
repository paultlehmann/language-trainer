import { CardContent, Typography } from '../mui';
import { TLearningLanguage, TSourceLanguage } from '../types';

interface ISentenceQuizCardProps {
  learningLanguage: TLearningLanguage;
  learningLanguageSentence: string;
  sourceLanguage: TSourceLanguage;
  sourceLanguageSentence: string;
}

const SentenceQuizCard = (props: ISentenceQuizCardProps) => {
  const {
    learningLanguage,
    learningLanguageSentence,
    sourceLanguage,
    sourceLanguageSentence
  } = props;

  return (
    <CardContent>
      <Typography sx={{ fontSize: 14 }}>{sourceLanguage}</Typography>
      <Typography variant="h5">{sourceLanguageSentence}</Typography>
      <Typography sx={{ fontSize: 14, marginTop: '20px' }}>
        {learningLanguage}
      </Typography>
      <Typography variant="h5">{learningLanguageSentence}</Typography>
    </CardContent>
  );
};

export default SentenceQuizCard;
