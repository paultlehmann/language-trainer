import { CardContent, Typography } from '@mui/material';
import WordInput from './WordInput';
import { TLearningLanguage, TSourceLanguage } from '../types';

interface ISingleWordCardProps {
  interactive?: boolean;
  learningLanguage: TLearningLanguage;
  learningLanguageWord: string;
  sourceLanguage: TSourceLanguage;
  sourceLanguageWord: string;
}

const SingleWordCard = (props: ISingleWordCardProps) => {
  const {
    interactive,
    learningLanguage,
    learningLanguageWord,
    sourceLanguage,
    sourceLanguageWord
  } = props;

  return (
    <CardContent>
      <Typography sx={{ fontSize: 14 }}>{sourceLanguage}</Typography>
      <Typography variant="h5">{sourceLanguageWord}</Typography>
      <Typography sx={{ fontSize: 14, marginTop: '20px' }}>
        {learningLanguage}
      </Typography>
      <Typography variant="h5">
        {interactive ? (
          <WordInput answer={learningLanguageWord} />
        ) : (
          learningLanguageWord
        )}
      </Typography>
    </CardContent>
  );
};

export default SingleWordCard;
