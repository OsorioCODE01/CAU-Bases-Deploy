
export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public firstName:string,
        public lastName :string,
        private address: string = 'No address'
    ){
    }

}

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'New York'); // Es el constructor de la clase padre
//     }
// }

//!!Priorizar Composicion sobre herencia, Es mejor centrarnos en que nuestras clases hagan una sola cosa y la hagan bien
export class Hero{
    // public person : Person;
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        // this.person = new Person(realName);
    }
}
const tony = new Person('Tony','Stark', 'New York');
const ironman = new Hero('IronMan', 45, 'Tony', tony);

console.log(ironman);
