import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) { }
    getUsers(){
        return this._http.get(`/users`)
    }
    createUser(newuser){
        return this._http.post(`/users`, newuser)
    }
    getUserById(id){
        return this._http.get(`/users/${id}`)
    }
    getUserByEmail(email){
        return this._http.get(`/email/${email}`)
    }
    deleteUser(id){
        return this._http.delete(`/users/${id}`)
    }
    updateUser(id, update){
        return this._http.put(`/users/${id}`, update)
    }
    userLogin(user){
        return this._http.post(`/users/login`, user);
    }
    // posts
    getPosts(){
        return this._http.get(`/posts`)
    }
    createPost(newpost){
        return this._http.post(`/posts`, newpost)
    }
    getPostById(id){
        return this._http.get(`/posts/${id}`)
    }
    getPostedById(id){
        return this._http.get(`/postedby/${id}`)
    }
    updatePost(id, update){
        return this._http.put(`/posts/${id}`, update)
    }
    deletePost(id){
        return this._http.delete(`/posts/${id}`)
    }
}
