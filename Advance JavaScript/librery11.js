// export {message,run,studen};
export {message,run,studen}

let message = "ES6 Module";

 let run = () => {
    return ("My Name is Ranjeet")
}

 class studen{
    constructor(name,age,city){
       this.name=name,
       this.age=age,
       this.city=city
    }
    inof(){
      console.log(this.name,this.age,this.city);
    }
}
