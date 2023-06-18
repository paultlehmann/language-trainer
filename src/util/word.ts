import { IArticlesByGender, INoun, IWord, IWords, TArticleType, TCase, TGender, TLearningLanguage, TPerson, TSourceLanguage, TTense, TWordType } from '../types';

const getDEArticle = (gender: TGender, gCase: TCase, articleConfig: IArticlesByGender) => {
    return articleConfig[gender][gCase]
  }
  
  const getDictFormWord = (type: TWordType, lang: TSourceLanguage | TLearningLanguage, wordInfo: IWord, articleConfig: IArticlesByGender) => {
    if (lang === 'de' && type === 'noun') {
      return `${getDEArticle((wordInfo as INoun).gender, 'nom', articleConfig)} ${wordInfo[lang]}`
    } else if (lang === 'en' && type === 'verb') {
      return `to ${wordInfo[lang]}`
    } else {
      return wordInfo[lang]
    }
  }

const getENVerb = (baseWord: string, tense: TTense, person: TPerson) => {
    if (tense === 'present') {
      return person === 'he' ? `${baseWord}s` : baseWord
      } else if (tense === 'past') {
        return `${baseWord}ed`
      } else if (tense === 'future') {
        return `will ${baseWord}`
      }
  }
  
  const getENNoun = (baseWord: string, plural: boolean, pluralForm?: string) => {
    if (plural) {
      return pluralForm || `${baseWord}s`
    } else {
      return baseWord
    }
  }
  
  const getDEVerb = (baseWord: string, tense: TTense, person: TPerson) => {
    if (tense === 'present') {
      const verbRoot = baseWord.substring(0, baseWord.lastIndexOf('en'))
      switch (person) {
        case 'i':
          return `${verbRoot}e`
        case 'you':
          return `${verbRoot}st`
        case 'he':
        case 'yall':
          return `${verbRoot}t`
        case 'we':
        case 'they':
        default:
          return baseWord
      }
    }
  }
  
  const getDEAdj = (baseWord: string, gender: TGender, gCase: TCase, articleType: TArticleType) => {
    if (gender === 'm') {
      switch (gCase) {
        case 'nom':
          if (articleType === 'def') {
            return `${baseWord}e`
          } else {
            return `${baseWord}er`
          }
        case 'acc':
            return `${baseWord}en`
        case 'dat':
          if (articleType === 'none') {
            return `${baseWord}em`
          } else {
            return `${baseWord}en`
          }
        case 'gen':
          return `${baseWord}en`
      }
    } else if (gender === 'f') {
      switch (gCase) {
        case 'nom':
        case 'acc':
          return `${baseWord}e`
        case 'dat':
        case 'gen':
          if (articleType === 'none') {
            return `${baseWord}er`
          } else {
            return `${baseWord}en`
          }
      }
    } else if (gender === 'n') {
      switch (gCase) {
        case 'nom':
        case 'acc':
          if (articleType === 'def') {
            return `${baseWord}e`
          } else {
            return `${baseWord}es`
          }
        case 'dat':
        case 'gen':
          if (articleType === 'none') {
            return `${baseWord}em`
          } else {
            return `${baseWord}en`
          }
      }
    }
  }
  
  const getDENounWithArticle = (baseWord: string, gender: TGender, gCase: TCase, articleConfig: IArticlesByGender) => {
    const article = getDEArticle(gender, gCase, articleConfig)
    return `${article} ${baseWord}`
  }

export const getWord = (lang: TSourceLanguage | TLearningLanguage, wordInfo: IWord, type: TWordType, person: TPerson, tense: TTense, isPlural: boolean, gCase: TCase, gender: TGender, articleType: TArticleType, articleConfig: IArticlesByGender) => {
    const baseWord = wordInfo[lang]
    if (lang === 'en') {
      if (type === 'verb') {
        return getENVerb(baseWord, tense, person)
      } else if (type === 'noun') {
        return getENNoun(baseWord, isPlural, (wordInfo as INoun).enPlural)
      }
  } else if (lang === 'de') {
    if (type === 'verb') {
      return getDEVerb(baseWord, tense, person)
    } else if (type === 'adj') {
      return getDEAdj(baseWord, gender, gCase, articleType)
    } else if (type === 'noun') {
      return getDENounWithArticle(baseWord, gender, gCase, articleConfig)
    }
  }
    return baseWord
  }

  export const getRandomWord = (words: IWords, type: TWordType, articleConfig: IArticlesByGender) => {
    const wordInfo = words[type][Math.floor(Math.random() * words[type].length)]
    const learningLanguageWord = getDictFormWord(type, 'de', wordInfo, articleConfig)
    const sourceLanguageWord = getDictFormWord(type, 'en', wordInfo, articleConfig)
    return { learningLanguageWord, sourceLanguageWord }
  }