import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../models/user.model';


const user = [
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
  private _usersDb: User[] = user;

  private _users$ = new BehaviorSubject<User[]>([])
  public users$ = this._users$.asObservable()

  constructor() {
  }

  public loadUser(filterBy?: { term: string }): void {
    let user = this._usersDb;
    console.log(user);
    this._users$.next(user)
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

  // public query() {
  //     const users = this._usersDb
  //     return this._users$.next(users);
  // }

  // public getUserById(id: string): Observable<User> {
  //     //mock the server work
  //     const user = this._usersDb.find(user => user._id === id)

  //     //return an observable
  //     return user ? of(user) : throwError(() => `User id ${id} not found!`)
  // }

  // public deleteUser(id: string) {
  //     //mock the server work
  //     this._usersDb = this._usersDb.filter(user => user._id !== id)

  //     // change the observable data in the service - let all the subscribers know
  //     this._users$.next(this._usersDb)
  // }

  // public saveUser(user: User) {
  //     return user._id ? this._updateUser(user) : this._addUser(user)
  // }

  // private _updateUser(user: User) {
  //     //mock the server work
  //     this._usersDb = this._usersDb.map(c => user._id === c._id ? user : c)
  //     // change the observable data in the service - let all the subscribers know
  //     this._users$.next(this._sort(this._usersDb))
  // }

  // private _addUser(user: User) {
  //     //mock the server work
  //     const newUser = new User(user.name, user.email, user.phone);
  //     if (typeof newUser.setId === 'function') newUser.setId(getRandomId());
  //     this._usersDb.push(newUser)
  //     this._users$.next(this._sort(this._usersDb))
  // }
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