import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loadingAtivo = true;
  constructor(
    private serviceloading: LoadingService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.serviceloading.observar().subscribe((ativo: boolean) => {
      this.loadingAtivo = ativo;
      this.cdRef.detectChanges()
    })
  }

}
