
import { Injectable, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser: User = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
      this.afAuth.onAuthStateChanged(user => {
        console.log('CHange:',user);
        this.currentUser = user;
      });
   }

   async signUp({email, password}) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email, password
    );

    console.log('result:', credential);
    const uid = credential.user.uid;
    
    return this.afs.doc(
     `users/${uid}` 
    ).set({
      uid,
      email: credential.user.email,
    })


   }

   signIn({email, password}) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
   }

   signOut() {
     return this.afAuth.signOut();
   }



}
