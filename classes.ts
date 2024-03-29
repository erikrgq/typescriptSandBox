class User {
    name: string;
    email: string;
    age: number;
    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('im a class: '+this.name);
    }

    register(){
        console.log(this.name+' '+'is now registered');
    }

    payInvoice(){
        console.log(this.name+" "+'paid invoice');
    }
}

let john = new User('John', 'Gang@gmail.com', 34);
console.log(john);
console.log(john.age);
john.register();

class Member extends User{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

let mike: User = new Member(1, 'Mike', 'Mike@gmail.com', 25);
console.log(mike);
mike.payInvoice();