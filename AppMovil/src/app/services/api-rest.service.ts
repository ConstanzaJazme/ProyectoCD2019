import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Injectable({
    providedIn: 'root'
})
export class ApiRestService {

    private api = 'https://jsonplaceholder.typicode.com';

    constructor(public http: HttpClient, private transfer: FileTransfer, private file: File) {

    }
    fileTransfer: FileTransferObject = this.transfer.create();

    getAllTasks() {
        const path = `${this.api}/todos/`;
        return this.http.get(path);
    }

    getTask(id: string) {
        const path = `${this.api}/todos/${id}`;
        return this.http.get(path);
    }

    upload(fileURL) {
        let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: 'name.m4a',
            headers: {}
        }

        this.fileTransfer.upload(fileURL, this.api, options)
            .then((data) => {
                return data;
            }, (err) => {
                return err;
            })
    }
}
