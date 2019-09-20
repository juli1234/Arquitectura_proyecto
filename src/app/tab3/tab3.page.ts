import { Component, OnInit } from '@angular/core';
import { ChatsService, chat } from "../servicios/chats.service"
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service"



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public chatRooms: any = [];
  constructor(public chatservice: ChatsService,
    private modal: ModalController,
    public actionSheetController: ActionSheetController,
    public authservices: AuthService) { }


  Onlogout() {
    this.authservices.logout();


  }


  ngOnInit() {

    this.chatservice.getChatRooms().subscribe(chats => {

      this.chatRooms = chats;

    })


  }
  openChat(chat) {

    this.modal.create({
      component: ChatComponent,
      componentProps: {
        chat: chat
      }
    }).then((modal) => modal.present())
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
