export class PersonI {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    description: string;
    city: string;
    country: string;
    street: string;
    weather_condition: string;

    public void (id: number){
        this.id=id;
    }
    public number (){
        return this.id;
    }
}