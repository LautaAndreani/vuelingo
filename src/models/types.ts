export interface Exercise {
  title: string
  text: string
  choices: string[]
  correctIndex: number
  isComplete?: boolean
  id: number
}

export interface correctAnswer {
  correctIndex: number
  choices: string[]
}
