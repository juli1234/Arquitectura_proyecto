import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { message } from "../../modelos/message"
import { ChatsService } from "../../servicios/chats.service"


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat: any;
  public menssages = [];
  public msg: string

  public room: any;
  public message: message;
  constructor(private navparams: NavParams,
    private modal: ModalController,
    private chatservice: ChatsService) { }

  ngOnInit() {
    this.chatservice.getChatRoom(this.chat.id).subscribe(room => {

      console.log(room);
      this.room = room;
    })
    this.chat = this.navparams.get('chat')

  }

  closeChat() {

    this.modal.dismiss()
  }

  sendMessage() {
    const mensaje: message = {
      content: this.msg,
      type: "text",
      date: new Date()
    }
    this.chatservice.sendMsgToFirebase(mensaje, this.chat.id);
    this.msg = "";

  }
}
