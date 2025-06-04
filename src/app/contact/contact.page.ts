import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  standalone:false,
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage {
  nome = '';
  email = '';
  mensagem = '';

  constructor(private toastController: ToastController) {}

  async enviarMensagem() {
    this.nome = '';
    this.email = '';
    this.mensagem = '';

    const toast = await this.toastController.create({
      message: 'Mensagem enviada com sucesso!',
      duration: 2000,
      color: 'success'
    });

    toast.present();
  }
}
