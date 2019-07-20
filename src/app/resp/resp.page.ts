import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiRestService } from './../services/api-rest.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-resp',
    templateUrl: './resp.page.html',
    styleUrls: ['./resp.page.scss'],
})
export class RespPage implements OnInit {

    gender: any;
    age: any;
    error: any;
    ruta: string = 'assets/Img/'

    constructor(
        private activatedRoute: ActivatedRoute,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController,
        public apiRestService: ApiRestService,
        private router: Router
    ) { }


    ngOnInit() {
        this.gender = this.activatedRoute.snapshot.paramMap.get('gender');
        this.age = this.activatedRoute.snapshot.paramMap.get('age');
        this.error = this.activatedRoute.snapshot.paramMap.get('error');
        this.mostrarResultados(this.gender, this.age, this.error);
    }

    mostrarResultados(gender, age, error) {
        let seleccionImagen;
        if (gender == 'mujer') {
            this.gender = 'Mujer';
            seleccionImagen = 'Mujeres/';
            if (age == '20 a 29 años') {
                seleccionImagen += 'adulta joven.png';
            } else {
                seleccionImagen += 'bebeM.png';
            }
        } else {
            this.gender = 'Hombre';
            seleccionImagen = 'Hombres/';
            if (age == '20 a 29 años') {
                seleccionImagen += 'adulto joven.png';
            } else {
                seleccionImagen += 'bebeM.png';
            }
        }

        this.ruta += seleccionImagen;

    }

    backHome() {
        this.router.navigate(['home']);
    }



}
