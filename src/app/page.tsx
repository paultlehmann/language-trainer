import Flashcard from "@/components/Flashcard";

const Home = () => {
  return (
    <main>
      <Flashcard style={{
        alignItems: 'center'
      }} learningLanguage='de'
      learningLanguageWord='Wurst'
      sourceLanguageWord='Sausage' />
    </main>
  );
};

export default Home;
