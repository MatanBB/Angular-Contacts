import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { LocalStorageService } from './localStorage-service.js.service';


const users = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "name": "Matan Bibi",
    "coins": 100,
    "moves": []
  }
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //mock the server
  private _usersDb: User[] = users;

  private _users$ = new BehaviorSubject<User[]>([])
  public users$ = this._users$.asObservable()

  private _currUser$ = new BehaviorSubject<User>({name:'',coins:0,moves:[]})
  public currUser$ = this._currUser$.asObservable()

  constructor(private localStorageService: LocalStorageService) {
  }

  public loadUser(filterBy?: { term: string }): void {
    let user = this._usersDb
    this._users$.next(user)
  }

  public getLoggedInUser() {
    return this.localStorageService.loadFromLocalSession('currUser')
  }

  public setLoggedInUser() {
    let currUser = this.localStorageService.loadFromLocalSession('currUser')
    this._currUser$.next(JSON.parse(currUser))
  }

  public signUp(user: User): void {
    let users = JSON.parse(this.localStorageService.loadFromLocalStorage('Users'))
    users && users.length ? users = users : users = []
    user._id=getRandomId()
    user.coins = 100
    users.push(user)
    this.localStorageService.saveToLocalStorage('Users', users)
    sessionStorage.setItem('currUser', JSON.stringify(user))
    this._users$.next(users)
    console.log(this._users$);
    
  }

  public updateUser(user:User):void{
    let userId = user._id
    let users = this.loadUsers()
    if(!users||!userId) return console.log('Trouble updating user');
    const idx = users.findIndex(currUser=>{return user._id===currUser._id})
    users?.splice(idx,1,user)
    this.localStorageService.saveToLocalStorage('Users',users)
  }

  public addMove() {
    let user = JSON.parse(this.localStorageService.loadFromLocalSession('User'))
    console.log(user)
  }

  onLogin(userName:string){
    let users = this.loadUsers()
    if (!users) return console.log('Trouble loading users...');
    let user = users.find((user:User)=>{ return user.name.toLocaleLowerCase()===userName.toLocaleLowerCase()})
    user?sessionStorage.setItem('currUser',JSON.stringify(user)):alert('Username not found')
    this._currUser$.next(user!)
  }
  
  public loadUsers(): User[] | null {
    let data= this.localStorageService.loadFromLocalStorage('Users')
    return JSON.parse(data)
  }

  private _sort(contacts: User[]): User[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    })
  }
}


function getRandomId(length = 8): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      characters.length));
  }
  return result;
}