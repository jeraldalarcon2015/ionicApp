import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { IdeaService } from './../../services/idea.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/services/idea.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})
export class IdeaListPage implements OnInit {

  public ideas: Observable<Idea[]>;

  constructor(
    private ideaService: IdeaService,
    private authService: AuthService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
    console.log('hhhh:',this.ideas)

  }

  async logout() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService
    .signOut()
    .then(
      (res) => {
        loading.dismiss();
        this.router.navigateByUrl('/login',{replaceUrl:true})
      }
    )
  }

}



// async signIn() {
//   const loading = await this.loadingController.create();
//   await loading.present();

//   this.authService
//     .signIn(this.credentialForm.value)
//     .then(
//       (res) => {
//         loading.dismiss();
//         this.router.navigateByUrl('',{ replaceUrl: true});
//       },
//       async (err) => {
//         loading.dismiss();
//         const alert = await this.alertController.create({
//           header: '',
//           message: err.message,
//           buttons: ['OK'],
//         });

//         await alert.present();
//       }
//     )
  
// }