function classDecoratory(){

}
//@classDecoratory
//No programe esta seccion por temas de que no es muy neceasrio para mi en estos momentos, con entender el concepto era sucficiente
export class SuperClass {
    public myProperty: string = 'Abc123';

    print(){
        console.log('Hola mundos')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass)