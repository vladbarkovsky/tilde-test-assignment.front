import { Directive, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';
import { BalanceStatus } from '../../../api-client';

@Directive({
  selector: '[balanceStatus]',
  standalone: true,
})
export class BalanceStatusDirective implements OnInit {
  @Input() balanceStatus!: BalanceStatus;

  private readonly renderer2 = inject(Renderer2);
  private readonly elementRef = inject(ElementRef);

  private readonly classMap = new Map<BalanceStatus, string>([
    [BalanceStatus.Negative, 'text-danger'],
    [BalanceStatus.Neutral, ''],
    [BalanceStatus.Positive, 'text-success'],
  ]);

  private readonly textMap = new Map<BalanceStatus, string>([
    [BalanceStatus.Negative, 'Negative'],
    [BalanceStatus.Neutral, 'Neutral'],
    [BalanceStatus.Positive, 'Positive'],
  ]);

  ngOnInit(): void {
    const className = this.classMap.get(this.balanceStatus);

    if (className) {
      this.renderer2.addClass(this.elementRef.nativeElement, className);
    }

    const text = this.textMap.get(this.balanceStatus);

    if (text) {
      const textNode = this.renderer2.createText(text);
      this.renderer2.appendChild(this.elementRef.nativeElement, textNode);
    }
  }
}
