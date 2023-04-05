export class User{
    
        name:String;
        email:String;
        experience:number;
        domain:String;
  
    
    
        constructor (name:string, email:string, experience:number, domain:string) {
            this.name=name;
            this.email=email;
            this.experience = experience;
            this.domain = domain;
        }
    }
