import {
  Directive,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  Inject,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Directive({
  selector: "[appScrollspy]",
})
export class ScrollspyDirective implements OnInit, OnDestroy {
  @Input() public spiedTags: string[] = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection = "";
  private documentScrollSubscription!: (event: Event) => void;

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.documentScrollSubscription = this.onScroll.bind(this);
    window.addEventListener("scroll", this.documentScrollSubscription);
  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.documentScrollSubscription);
  }

  onScroll(event: Event): void {
    const children = this.el.nativeElement.querySelectorAll("section");
    const scrollTop = this.document.documentElement.scrollTop;
    const parentOffset = this.el.nativeElement.offsetTop;

    for (const element of children) {
      if (this.spiedTags.includes(element.tagName.toLowerCase())) {
        const offsetTop = element.offsetTop - parentOffset;
        if (
          offsetTop <= scrollTop &&
          offsetTop + element.clientHeight > scrollTop
        ) {
          if (this.currentSection !== element.id) {
            this.currentSection = element.id;
            this.sectionChange.emit(this.currentSection);
          }
        }
      }
    }
  }
}
