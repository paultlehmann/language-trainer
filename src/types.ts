export interface ILanguageConfig {
    rules: IRules;
    words: IWords;
}

export interface IWords {
    adj: IAdjective[];
    noun: INoun[];
    verb: IVerb[];
}

export interface IWord {
    de: string;
    en: string;
    // ru?: string;
}

export interface INoun extends IWord {
    gender: TGender;
    plural?: string;
    enPlural?: string;
}

interface IVerb extends IWord {
    trans: boolean | 'both' | 'datOb' | 'datOpt'
}

interface IAdjective extends IWord {}

interface IRules {
    articles: IArticles;
    conjugations: IConjugations;
}

interface IArticles {
    def: IArticlesByGender;
    indef: IArticlesByGender;
}

export interface IArticlesByGender {
    m: ICases,
    f: ICases,
    n: ICases
}

interface ICases {
    nom: string;
    acc: string;
    dat: string;
    gen: string
}

interface IConjugations {
    present: IPersons
    past: IPersons
}

interface IPersons {
    i: string;
    you: string;
    he: string;
    we: string;
    yall: string;
    they: string;
}

export type TGender = 'f' | 'm' | 'n'

export type TCase = 'nom' | 'acc' | 'dat' | 'gen'

export type TWordType = 'adj' | 'noun' | 'verb'

export type TPerson = 'i' | 'you' | 'he' | 'we' | 'yall' | 'they'

export type TTense = 'present' | 'past' | 'future'

export type TArticleType = 'def' | 'indef' | 'none'

export type TSourceLanguage = 'en'

export type TLearningLanguage = 'de' 