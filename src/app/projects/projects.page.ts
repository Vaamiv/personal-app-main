import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectModalComponent } from '../components/project-modal/project-modal.component';

@Component({
  standalone:false,
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage {

  constructor(private modalController: ModalController) {}


  async abrirModal(titulo: string, descricao: string, link: string) {
    const modal = await this.modalController.create({
      component: ProjectModalComponent,
      componentProps: {
        titulo,
        descricao,
        link
      }
    });
    return await modal.present();
  }
}
