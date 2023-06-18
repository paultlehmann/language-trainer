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
        verbs: [{
            word: 'lieben',
            trans: true
        },
        {
            word: 'spielen',
            trans: false
        },
        {
            word: 'stehlen',
            trans: 'both'
        }
        ],
        nouns: [{
            word: 'Mann',
            gender: 'm',
            plural: "Männer"
        },
        {
            word: 'Frau',
            gender: 'f',
            plural: 'Frauen'
        },
        {
            word: 'Kind',
            gender: 'n',
            plural: 'Kinder'
        }],
        adjectives: [{
            word: 'gut'
        },
        {
            word: 'schlecht'
        }]
    }
}

export default configDE;