import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() link: string = '';

  constructor(private modalController: ModalController) {}

  fechar() {
    this.modalController.dismiss();
  }
}
