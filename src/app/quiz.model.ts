// defines structure of app model

// lays within main class
export class Choice {
  constructor(public value: string, public correct?: boolean) {}
}

// lays within main class
export class Question {
  constructor(public label: string, public choices: Choice[]) {}
}

// loads given data, a main class
export class Quiz {
  constructor(public label: string, public name: string, public description: string, public fileName: string) {}
}

// represents collected data from user, a main class
export class Answers {
  constructor(public values: Choice[]=[]) {}
}
