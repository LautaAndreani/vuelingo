import { Exercise } from '../models/types'

export const exercises: Exercise[] = [
  {
    title: 'Completa el espacio en blanco',
    text: "They enjoy <complete>, but they don't read often",
    choices: ['visit', 'to visit'],
    correctIndex: 1,
    isComplete: true,
    id: 1,
  },
  // {
  //   title: '¿Sabes qué significa?',
  //   text: 'This is a nice <u><strong> truck <strong/><u/>',
  //   choices: ['bicicleta', 'auto', 'camioneta'],
  //   correctIndex: 2,
  //   isComplete: false,
  //   id: 2,
  // },
  //   {
  //     title: 'Completa el espacio en blanco',
  //     text: 'During the <complete>, they tried to take fifty thousand dollars from the bank! But the police caught them.',
  //     choices: ['robbery', 'concert', 'show'],
  //     correctIndex: 0,
  //     isComplete: true,
  //     id: 3,
  //   },
]
