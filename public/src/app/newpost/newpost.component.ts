import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
	newpost: any;
	newtags: any;
  constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

  ngOnInit() {
  	this.newpost = { title: '', content: '', posted_by: '5b7c55bf840c56307b4efc7c' }
  }
  submitPost(){
  	let observable = this._httpService.createPost(this.newpost);
  	observable.subscribe(data => {
  		console.log(data);
  		let post: any = data;
  		console.log(post._id);
  	});
  }
  goToPost(id){
  	this._router.navigate([`/posts/${id}`]);
  }
}
