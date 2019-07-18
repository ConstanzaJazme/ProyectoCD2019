import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiRestService } from './../services/api-rest.service';

@Component({
    selector: 'app-resp',
    templateUrl: './resp.page.html',
    styleUrls: ['./resp.page.scss'],
})
export class RespPage implements OnInit {

    title: any;
    id: any;
    userId: any;
    completed: any;


    constructor(
        private activatedRoute: ActivatedRoute,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController,
        public apiRestService: ApiRestService,
    ) { }


    ngOnInit() {
        this.title = this.activatedRoute.snapshot.paramMap.get('title');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
        this.completed = this.activatedRoute.snapshot.paramMap.get('completed');

    }



}
