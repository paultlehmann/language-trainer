export interface ILanguageConfig {
    rules: IRules;
    words: IWords;
}

interface IWords {
    adjectives: IAdjective[];
    nouns: INoun[];
    verbs: IVerb[];
}

interface IWord {
    word: string;
}

interface INoun extends IWord {
    gender: TGender;
    plural?: string;
}

interface IVerb extends IWord {
    trans: boolean | 'both'
}

interface IAdjective extends IWord { }

interface IRules {
    articles: IArticles;
    conjugations: IConjugations;
}

interface IArticles {
    def: IArticlesByGender;
    indef: IArticlesByGender;
}

interface IArticlesByGender {
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

type TGender = 'f' | 'm' | 'n'