import { Component, OnInit, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Input() navClass!: string;
  @Input() buttonList!: boolean;
  @Input() sliderTopbar!: boolean;
  @Input() isDeveloper!: boolean;
  @Input() shopPages!: boolean;

  isCondensed = false;

  constructor(private router: Router, private modalService: NgbModal) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.activateMenuDropdown();
      }
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.activateMenuDropdown();
  }

  activateMenuDropdown() {
    const resetParent = (el: Element) => {
      el.classList.remove("active");
      let parent = el.parentElement;
      while (parent) {
        parent.classList.remove("active");
        parent = parent.parentElement;
      }
    };

    const links = Array.from(
      document.getElementsByClassName("nav-link-ref")
    ) as HTMLAnchorElement[];
    let matchingMenuItem: HTMLAnchorElement | null = null;

    for (const link of links) {
      resetParent(link);
    }

    for (const link of links) {
      if (link.pathname === window.location.pathname) {
        matchingMenuItem = link;
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      let parent = matchingMenuItem.parentElement;
      while (parent) {
        parent.classList.add("active");
        parent = parent.parentElement;
      }
      document.getElementById("navigation")!.style.display = "none";
      this.isCondensed = false;
    }
  }

  windowScroll() {
    // ... (No changes here, include the original method as is)
  }

  toggleMenu() {
    // ... (No changes here, include the original method as is)
  }

  onMenuClick(event: MouseEvent) {
    event.preventDefault();

    // Type assertion to treat the target as an Element
    const target = event.target as Element;

    // Navigate to the parent 'li' element if it exists
    const parentLi = target.closest("li");

    // Proceed only if there's a parent 'li' found
    if (parentLi) {
      // Toggle the 'open' class on the submenu
      const submenu = parentLi.querySelector(".submenu") as HTMLElement;
      if (submenu) {
        submenu.classList.toggle("open");
      }

      // If there is a need to access the next sibling's next sibling,
      // you can use the following approach (though this is unusual and might need a clearer logic depending on your needs):
      const nextSibling = target.nextElementSibling?.nextElementSibling;
      // ... Do something with the next sibling's next sibling if needed

      // If you need to access the parentNode, you can directly use:
      const parentNode = target.parentNode;
      // ... Do something with the parentNode if needed
    }
  }

  developerModal(content: any): void {
    // ... (No changes here, include the original method as is)
  }

  wishListModal(content: any) {
    // ... (No changes here, include the original method as is)
  }
}
