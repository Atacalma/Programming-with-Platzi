let pakimanImages = [];
pakimanImages ["Cauchin"] = "img/vaca.webp";
pakimanImages ["Pokacho"] = "img/pollo.webp";
pakimanImages ["Tocinauro"] = "img/cerdo.webp";



let pakidex = [];
pakidex ["Cauchin"] = new Pakiman ("Cauchin", 100, 30);                 //pakidex.push (new Pakiman ("Cauchin", 100, 30))
pakidex ["Pokacho"] = new Pakiman ("Pokacho", 70, 50);                  //pakidex.push (new Pakiman ("Pokacho", 70, 50))
pakidex ["Tocinauro"] = new Pakiman ("Tocinauro", 120, 40);             //pakidex.push (new Pakiman ("Tocinauro", 120, 40))

pakidex["Cauchin"].show ()                                              //pakidex[0].show ()

for (let pakiman in pakidex) {                                          //for (let pakiman of pakidex) {
    console.log (pakiman);                                              //    console.log (pakiman)
    pakidex[pakiman].show ();                                           //    pakiman.show ();
}                                                                       //}