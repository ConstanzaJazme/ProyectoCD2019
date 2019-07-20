import { Component, OnInit, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ApiRestService } from './../services/api-rest.service';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


@Component({
    selector: 'app-work',
    templateUrl: './work.page.html',
    styleUrls: ['./work.page.scss'],
})

@Injectable({
    providedIn: 'root'
})

export class WorkPage implements OnInit {

    consulta: any;
    nombre: any;
    consola: any;
    private api = 'http://0.0.0.0:8000/audio/ingresar';

    constructor(
        public apiRestService: ApiRestService,
        private router: Router,
        public activatedRoute: ActivatedRoute,
        private transfer: FileTransfer, private file: File
    ) { }

    ngOnInit() {
        this.consulta = this.activatedRoute.snapshot.paramMap.get('consulta');
        this.nombre = this.activatedRoute.snapshot.paramMap.get('name');
        console.log(this.consulta, this.nombre);
        this.upload(this.consulta, this.nombre);
        // this.getPostsId('1');
    }

    fileTransfer: FileTransferObject = this.transfer.create();

    upload(fileURL, name) {
        let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: name,
            headers: {}
        }

        this.fileTransfer.upload(fileURL + name, this.api, options)
            .then((data) => {
                console.log(data);
                this.consola = "Algo bueno esta pasando";
                setTimeout(() => {
                    this.router.navigate([
                        'resp',               //Ruta donde va la información
                        data['gender'],         //Elemento dentro del objeto
                        data['age'],         //Elemento dentro del objeto
                        data['error'],         //Elemento dentro del objeto
                    ])
                }, 2000); //Tiempo antes de redireccionar
            }, (err) => {
                console.log(err);
                this.consola = "Mejor revisa el codigo" + err;
            })
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
