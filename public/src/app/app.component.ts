import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'public';
    loggedIn: boolean;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }
    ngOnInit(){
    	this.title = 'Clout Token';
        this.loggedIn = false;
    }
    public windowsIcon = require('./images/icon.png');
    public pcIcon = require('./images/computer.png');
    public fileIcon = require('./images/file.png');
    public phoneIcon = require('./images/phone.png');
    public folderIcon = require('./images/folder.png');
    public aolIcon = require('./images/aol-icon.png');
}
