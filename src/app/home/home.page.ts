import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

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
    mediaFiles = [];
    @ViewChild('myvideo') myVideo: any;

    constructor(
        public navCtrl: NavController,
        private mediaCapture: MediaCapture,
        private storage: Storage,
        private file: File,
        private media: Media,
        private router: Router
    ) { }

    ionViewDidLoad() {
        this.storage.get(MEDIA_FILES_KEY).then(res => {
            this.mediaFiles = JSON.parse(res) || [];
        })
    }

    captureAudio() {
        this.mediaCapture.captureAudio().then(res => {
            this.storeMediaFiles(res);
        }, (err: CaptureError) => console.error(err));

        this.router.navigate(['work', 1]);
    }
    play(myFile) {
        if (myFile.name.indexOf('.wav') > -1) {
            const audioFile: MediaObject = this.media.create(myFile.localURL);
            audioFile.play();
        } else {
            let path = this.file.dataDirectory + myFile.name;
            let url = path.replace(/^file:\/\//, '');
            let video = this.myVideo.nativeElement;
            video.src = url;
            video.play();
        }
    }

    storeMediaFiles(files) {
        this.storage.get(MEDIA_FILES_KEY).then(res => {
            if (res) {
                let arr = JSON.parse(res);
                arr = arr.concat(files);
                this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
            } else {
                this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
            }
            this.mediaFiles = this.mediaFiles.concat(files);
        })
    }
}
