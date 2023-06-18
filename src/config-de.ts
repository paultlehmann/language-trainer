import { ILanguageConfig } from './types';

const configDE: ILanguageConfig = {
    rules: {
        articles: {
            def: {
                m: {
                    nom: 'der',
                    acc: 'den',
                    dat: 'dem',
                    gen: 'des'
                },
                f: {
                    nom: 'die',
                    acc: 'die',
                    dat: 'der',
                    gen: 'der'
                },
                n: {
                    nom: 'das',
                    acc: 'das',
                    dat: 'dem',
                    gen: 'des'
                }
            },
            indef: {
                m: {
                    nom: 'ein',
                    acc: 'einen',
                    dat: 'einem',
                    gen: 'eines'
                },
                f: {
                    nom: 'eine',
                    acc: 'eine',
                    dat: 'einer',
                    gen: 'einer'
                },
                n: {
                    nom: 'ein',
                    acc: 'ein',
                    dat: 'einem',
                    gen: 'eines'
                }
            }
        },
        conjugations: {
            present: {
                i: 'e',
                you: 'st',
                he: 't',
                we: 'en',
                yall: 't',
                they: 'en'
            },
            past: {
                i: '',
                you: 'st',
                he: '',
                we: 'en',
                yall: 't',
                they: 'en'
            }
        }
    },
    words: {
        verb: [{
            de: 'lieben',
            en: 'love',
            trans: true
        },
        {
            de: 'spielen',
            en: 'play',
            trans: false
        },
        {
            de: 'stehlen',
            en: 'steal',
            trans: 'datOpt'
        },
        {
        de: 'geben',
        en: 'give',
        trans: 'datOb'
        },
        {
        de: 'schlagen',
        en: 'hit',
        trans: false
        },
        {
            de: 'fahren',
            en: 'drive',
            trans: 'both'
        }
        ],
        noun: [{
            de: 'Mann',
            en: 'man',
            gender: 'm',
            plural: "Männer"
        },
        {
            de: 'Frau',
            en: 'woman',
            gender: 'f',
            plural: 'Frauen'
        },
        {
            de: 'Kind',
            en: 'child',
            gender: 'n',
            plural: 'Kinder'
        },
        {
            de: 'Hund',
            en: 'dog',
            gender: 'm'
        },
    {
        de: 'Katze',
        en: 'cat',
        gender: 'f'
    }],
        adj: [{
            de: 'gut',
            en: 'good'
        },
        {
            de: 'schlecht',
            en: 'bad'
        },
    {
        de: 'alt',
        en: 'old'
    },
{
    de: 'jung',
    en: 'young'
}]
    }
}

export default configDE;