import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PostServiceProvider {

    private api = 'https://jsonplaceholder.typicode.com';

    constructor(public http: HttpClient) {

    }

    getAllTasks() {
        const path = `${this.api}/todos/`;
        return this.http.get(path);
    }

    getTask(id: string) {
        const path = `${this.api}/todos/${id}`;
        return this.http.get(path);
    }

}
