import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ApiRestService } from './../services/api-rest.service';

@Component({
    selector: 'app-work',
    templateUrl: './work.page.html',
    styleUrls: ['./work.page.scss'],
})

export class WorkPage implements OnInit {

    consulta: any;

    constructor(
        public apiRestService: ApiRestService,
        private router: Router,
        public activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        let consulta = this.activatedRoute.snapshot.paramMap.get('consulta');
        this.getPostsId(consulta);//Llamamos a la función getPost cuando la vista se cargue
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("delay"));
    }

    getPostsId(id: string) { //llamamos a la funcion getPost de nuestro servicio.

        this.apiRestService.getTask(id).subscribe(res => {
            // res = Array.of(res);
            console.log(res);
            setTimeout(() => {
                this.router.navigate([
                    'resp',               //Ruta donde va la información
                    res['title'],         //Elemento dentro del objeto
                    res['id'],
                    res['userId'],
                    res['completed']
                ])
            }, 2000);
        });

    }

}
