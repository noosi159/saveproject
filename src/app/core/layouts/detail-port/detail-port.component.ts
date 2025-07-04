import { Component } from '@angular/core';
import { MOCK_PORTFOLIOS, Portfolio } from './mock-portfolios';
import { SharedModule } from '../../../shared/shared.module';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Footer } from 'primeng/api';

@Component({
  selector: 'app-detail-port',
  imports: [SharedModule],
  templateUrl: './detail-port.component.html',
  styleUrl: './detail-port.component.scss',
})
export class DetailPortComponent {
  portfolio: Portfolio | undefined;
  safePdfUrl!: SafeResourceUrl;

  // เพิ่มตัวแปรสำหรับ comment
  comments: string[] = [];
  newComment: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.portfolio = MOCK_PORTFOLIOS[0];
    if (this.portfolio?.file_type === 'pdf') {
      this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.portfolio.file_path
      );
    }
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment.trim());
      this.newComment = '';
    }
  }
}
