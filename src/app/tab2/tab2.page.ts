import { Component } from '@angular/core';

import { ChatsService, chat } from "../servicios/chats.service"
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service"

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public chatservice: ChatsService,
    private modal: ModalController,
    public actionSheetController: ActionSheetController,
    public authservices: AuthService) {}


    
    Onlogout() {
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
  
