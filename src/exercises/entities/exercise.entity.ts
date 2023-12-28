import { Muscle } from "./muscle.entity";

export class Exercise {
  constructor(
    public name: string,
    public unit: 'time' | 'repetitions',
    public muscle: Muscle
  ) { }
}
