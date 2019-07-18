import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    title: any;
    id: any;
    userId: any;
    completed: any;

    constructor(
        public navCtrl: NavController,
        private activatedRoute: ActivatedRoute
    ) {

        // this.arrayPosts = this.activatedRoute.snapshot.paramMap.get('respuesta');

    }
    ngOnInit() {
        this.title = this.activatedRoute.snapshot.paramMap.get('title');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
        this.completed = this.activatedRoute.snapshot.paramMap.get('completed');
    }




}
