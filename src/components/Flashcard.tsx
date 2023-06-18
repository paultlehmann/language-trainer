import { Box, Card, CardContent, Typography } from '../mui';

type TSourceLanguage = 'en'
type TLearningLanguage = 'de' | 'ru'

interface IFlashcardProps {
    learningLanguage: TLearningLanguage;
    learningLanguageWord: string;
    sourceLanguage?: TSourceLanguage;
    sourceLanguageWord: string;
    style: any
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Flashcard = (props: IFlashcardProps) => {
    const {
        learningLanguage,
        learningLanguageWord,
        sourceLanguageWord,
        sourceLanguage = 'en'
    } = props;

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