class Pakiman {
    constructor (name, life, strenght) {  
        this.image = new Image;
        this.name = name;
        this.life = life;
        this.strenght = strenght     ;
        this.image.src = pakimanImages [this.name];
    }
    greet () {
        alert (this.name + " " + this.name )
    }
    show () {
        document.body.appendChild (this.image);
        document.write ("<p> <strong>" + this.name + "</strong> <br />");
        document.write ("Life: " + this.life +  "<br />");
        document.write ("Strenght: " + this.strenght + "<br /> </p> <hr />");       
    }
}