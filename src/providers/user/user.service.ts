
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { FirebaseApp } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";

import { User } from '../../models/user.model';

import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class UserService {
  
  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: Http
  ) {
    
  }
  
  create(user: User): Promise<void>{
    return this.db.object(`/users`)
    .set(user);
  }
  
}
