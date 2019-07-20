import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, AlertController, ModalController } from '@ionic/angular';

import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { MediaCapture, MediaFile, CaptureVideoOptions, CaptureError } from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';

import { Router } from '@angular/router';

const MEDIA_FILES_KEY = 'mediaFiles';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage {

    recording: boolean = false;
    playing: boolean = false;
    filePath: string;
    fileName: string;
    audio: MediaObject;
    audioList: any[] = [];
    console: any;
    storage: string = 'file:///storage/emulated/0/Android/data/io.ionic.starter/files/';

    constructor(public navCtrl: NavController,
        private media: Media,
        private file: File,
        public platform: Platform,
        private router: Router,
    ) { }

    ionViewWillEnter() {
        this.getAudioList();
    }

    getAudioList() {
        if (localStorage.getItem("audiolist")) {
            this.audioList = JSON.parse(localStorage.getItem("audiolist"));
            console.log(this.audioList);
        }
    }

    startRecord() {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.wav';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        } else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.wav';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.startRecord();
        this.recording = true;
    }

    stopRecord() {
        this.audio.stopRecord();
        let data = { filename: this.fileName };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();
    }

    playAudio(file, idx) {
        // this.playing = true;
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        } else if (this.platform.is('android')) {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.play();
        this.audio.setVolume(0.8);
    }

    stopAudio() {
        this.audio.stop();
    }

    deleteFile(file) {

        this.file = file;
        this.file.removeFile(this.storage + file.filename, file.filename).then(data => {
            console.log('file removed: ', this.file);
            data.fileRemoved.getMetadata(function(metadata) {
                let name = data.fileRemoved.name;
                let size = metadata.size;
                let fullPath = data.fileRemoved.fullPath;
                console.log('Deleted file: ', name, size, fullPath);
                console.log('Name: ' + name + ' / Size: ' + size);
            });
        }).catch(error => {
            file.getMetadata(function(metadata) {
                let name = file.name;
                let size = metadata.size;
                console.log('Error deleting file from cache folder: ', error);
                console.log('Name: ' + name + ' / Size: ' + size);
            });
        });
        this.getAudioList();
    }

    mandarInfo(file) {
        this.router.navigate(['work', this.storage, file.filename]);
        this.file.checkFile(this.storage, file.filename)
            .then(res => {
                this.console = "Encontrado";
            })
            .catch(error => {
                this.console = "Nope";
            });
    }

    mandarInfo2() {
        this.router.navigate(['work', this.storage, 'Voz123.wav']);
    }

    resp() {
        this.router.navigate(['resp', 'hombre', '20 a 29 años', '0']);

    }


}
