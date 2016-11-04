import { Component } from '@angular/core';
import {InputComponent} from "../input/input.component";

@Component({
    selector: 'kalenteri-app',
    templateUrl: './kalenteri.component.html'
})
export class KalenteriComponent {
    d;
    paiva:number;
    pvm;
    viikonPaivat:any[] = [];
    kalenteriPaivamaarat:any[] = [];
    kellonAjat:any[] = [];
    naytaTapahtuma:boolean = false;
    tapahtumaId:string;
    tapahtumaKlo:string;
    tapahtumaPvm:string;

    constructor(){
        this.d = new Date();
        this.paiva = this.d.getDay();
        this.pvm = this.d.getDate() + "." + (this.d.getMonth()+1) + "." + this.d.getFullYear();
    }

    ngAfterViewInit(){
        let paivat:string[] = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'];

        let curDay = paivat[this.paiva - 1];
        let curDate = this.pvm;

        for(let i = 0; i <= 23; i++) {
            if(i < 10) {
                this.kellonAjat.push("0"+i+":00");
            } else {
                this.kellonAjat.push(i + ":00");
            }
        }


        for(let i = 0; i < 7; i++) {
            this.viikonPaivat.push(curDay);
            if(curDay === 'Sunnuntai') {
                this.paiva = 0;
            }
            curDay = paivat[this.paiva];
            this.paiva++;
        }
        this.kalenteriPaivamaarat.push(curDate);
        for(let i = 1; i < 7; i++) {
            let huominen = new Date();
            huominen.setDate(this.d.getDate()+i);
            this.kalenteriPaivamaarat.push((huominen.getDate() + "." + (huominen.getMonth()+1) + "." + huominen.getFullYear()));

        }
    }

    lisaaTapahtuma(obj){
        //console.log(obj);
        this.tapahtumaId = obj;
        this.tapahtumaKlo = obj.slice(-5);
        this.tapahtumaPvm = obj.slice(0, -5);
        this.naytaTapahtuma = true;
        //this.naytaTapahtuma = !this.naytaTapahtuma;
    }

}