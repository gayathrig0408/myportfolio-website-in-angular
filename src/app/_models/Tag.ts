export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly HTML = new Tag('HTML', 'brown');
  static readonly CSS = new Tag('CSS', 'black');
  static readonly REACT = new Tag('React', 'purple');
  static readonly NODEJS = new Tag('NodeJS', 'green');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'pink');
  static readonly PYTHON = new Tag('Python', 'rosybrown'); // Changed from 'rose'
  static readonly MONGODB = new Tag('MongoDB', 'darkred');
  static readonly TYPESCRIPT = new Tag('Typescript', 'darkpink');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString(): string {
    return this.key;
  }
}