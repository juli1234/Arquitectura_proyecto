import { Component } from '@angular/core';
import {AuthService} from "../servicios/auth.service"
import { ChatsService, chat } from "../servicios/chats.service"
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public chatservice: ChatsService,
    private modal: ModalController,
    public actionSheetController: ActionSheetController,
    public authservices: AuthService) {}

  Onlogout(){  
this.authservices.logout();  


  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log.out',
        handler: () => {
          this.Onlogout()
        },
      }]
    });
    await actionSheet.present();
  }

}


