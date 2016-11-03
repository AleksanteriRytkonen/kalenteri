import { Component } from '@angular/core';

@Component({
    selector: 'kalenteri-app',
    templateUrl: './kalenteri.component.html'
})
export class KalenteriComponent {
    d;
    paiva:number;
    pvm;

    constructor(){
        this.d = new Date();
        this.paiva = this.d.getDay();
        this.pvm = this.d.getDate() + "." + (this.d.getMonth()+1) + "." + this.d.getFullYear();
    }

    ngAfterViewInit(){
        let paivat:string[] = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'];
        let viikonPaivat:string[] = [];
        let kalenteriPaivamaarat:string[] = [];

        let curDay = paivat[this.paiva - 1];
        let curDate = this.pvm;

        for(let i = 0; i < 7; i++) {
            viikonPaivat.push(curDay);
            if(curDay === 'Sunnuntai') {
                this.paiva = 0;
            }
            curDay = paivat[this.paiva];
            this.paiva++;
        }
        kalenteriPaivamaarat.push(curDate);
        for(let i = 1; i < 7; i++) {
            let huominen = new Date();
            huominen.setDate(this.d.getDate()+i);
            kalenteriPaivamaarat.push((huominen.getDate() + "." + (huominen.getMonth()+1) + "." + huominen.getFullYear()));

        }

        console.log(viikonPaivat);
        console.log(kalenteriPaivamaarat);
    }

}