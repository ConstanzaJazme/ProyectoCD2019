import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PostServiceProvider } from './../post-service.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    consulta: string;

    constructor(
        public postServices: PostServiceProvider,
        private router: Router,
        public activatedRoute: ActivatedRoute
    ) { }


    ngOnInit() {
        this.consulta = this.activatedRoute.snapshot.paramMap.get('consulta');
        this.getPostsId(this.consulta);//Llamamos a la función getPost cuando la vista se cargue
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("delay"));
    }

    getAllPosts() { //llamamos a la funcion getPost de nuestro servicio.

        this.postServices.getAllTasks().subscribe(res => {
            console.log(res);
            this.arrayPosts = res;
            this.router.navigate(['/tabs/tab3', { respuesta: this.arrayPosts }])
        });

    }

    getPostsId(id: string) { //llamamos a la funcion getPost de nuestro servicio.

        this.postServices.getTask(id).subscribe(res => {
            console.log(res);
            setTimeout(() => {
                this.router.navigate(['/tabs/tab3', {
                    title: res.title,
                    id: res.id,
                    userId: res.userId,
                    completed: res.completed
                }])
            }, 2000);
        });

    }
    upload() {
        let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {}
        }

        fileTransfer.upload('<file path>', '<api endpoint>', options)
            .then((data) => {
                // success
            }, (err) => {
                // error
            })
    }

    import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';

constructor(private transfer: FileTransfer, private file: File) { }


const fileTransfer: FileTransferObject = this.transfer.create();


}
