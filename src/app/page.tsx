import config from '@/config-de';
import Flashcard from "@/components/Flashcard";

const Home = () => {
  return (
    <main>
      <Flashcard style={{
        alignItems: 'center'
      }}
      cardType={'singleWord'} 
      learningLanguage='de'
      config={config}
       />
    </main>
  );
};

export default Home;
