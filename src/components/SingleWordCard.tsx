import { CardContent, Typography } from '../mui'
import { TLearningLanguage, TSourceLanguage } from '../types';

interface ISingleWordCardProps {
    learningLanguage: TLearningLanguage;
    learningLanguageWord: string;
    sourceLanguage: TSourceLanguage;
    sourceLanguageWord: string;
}

const SingleWordCard = (props: ISingleWordCardProps) => {
    const {
        learningLanguage,
        learningLanguageWord,
        sourceLanguage,
        sourceLanguageWord
    } = props;

  return (
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
  );
}

export default SingleWordCard;