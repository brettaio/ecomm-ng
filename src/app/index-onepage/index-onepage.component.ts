import { Component, Input, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index-onepage",
  templateUrl: "./index-onepage.component.html",
  styleUrls: ["./index-onepage.component.css"],
})

/**
 * Onepage Component
 */
export class IndexOnepageComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  isCondensed = false;
  currentSection = "home";

  /**
   * Client Testimonial Data
   */
  testimonialData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Brett Mullins",
      designation: "C.E.O",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`,
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`,
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `It's Been An Absolute Pleasure To Work With Bretta. I Appreciate Your Genuine Care To My Success & Your Creative, Always Outside Ideas To Get There.`,
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`,
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `Thank you Bretta. I felt like you understood, empathetically where I was coming from when we met. I appreciate the time you've taken to help educate and teach my team. `,
    },
  ];

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Design & Development",
      description:
        "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
    },
    {
      icon: "uil uil-vector-square h1 text-primary",
      title: "Build & Deploy",
      description:
        "This is the magic sauce. Could it be a simple landing page? Connected to 20 ad campaigns? or the other way round. All pathways are different, but all beginnings are the same. Buy now and lets get started.",
    },
    {
      icon: "uil uil-file-search-alt h1 text-primary",
      title: "Stratagy & Research",
      description:
        "Let me take care of it. Peace of mind. You run your business, I'll run our holistic digital marketing approach and report the good news. Whattaya say? Buy Now and let's get started.",
    },
    {
      icon: "uil uil-airplay h1 text-primary",
      title: "Easy To Use",
      description:
        "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
    },
    {
      icon: "uil uil-calendar-alt h1 text-primary",
      title: "Daily Reports",
      description:
        "This is the magic sauce. Could it be a simple landing page? Connected to 20 ad campaigns? or the other way round. All pathways are different, but all beginnings are the same. Buy now and lets get started.",
    },
    {
      icon: "uil uil-clock h1 text-primary",
      title: "Real Time Zone",
      description:
        "Let me take care of it. Peace of mind. You run your business, I'll run our holistic digital marketing approach and report the good news. Whattaya say? Buy Now and let's get started.",
    },
  ];

  /**
   * Pricing Data
   */
  pricingData = [
    {
      title: "Free",
      price: 0,
      list: ["Full Access", "Source Files"],
      btn: "Buy Now",
    },
    {
      warning: "Best",
      title: "Starter",
      price: 39,
      list: ["Full Access", "Source Files", "Free Appointments"],
      btn: "Get Started",
    },
    {
      title: "Professional",
      price: 59,
      list: [
        "Full Access",
        "Source Files",
        "1 Domain Free",
        "Enhanced Security",
      ],
      btn: "Try It Now",
    },
    {
      title: "Ultimate",
      price: 79,
      list: [
        "Full Access",
        "Source Files",
        "1 Domain Free",
        "Enhanced Security",
        "Free Installment",
      ],
      btn: "Started Now",
    },
  ];

  /**
   * Member Data
   */
  memberData = [
    {
      profile: "assets/images/client/01.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O",
    },
    {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director",
    },
    {
      profile: "assets/images/client/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager",
    },
    {
      profile: "assets/images/client/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer",
    },
  ];

  ngOnInit(): void {}

  mapView(mapcontent: any) {
    this.modalService.open(mapcontent, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(content: any) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }
  openTrialModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Toggle menu
   */
  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById("navigation")!.style.display = "block";
    } else {
      document.getElementById("navigation")!.style.display = "none";
    }
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("topnav")!.classList.add("nav-sticky");
    } else {
      document.getElementById("topnav")!.classList.remove("nav-sticky");
    }

    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("back-to-top")!.style.display = "inline";
    } else {
      document.getElementById("back-to-top")!.style.display = "none";
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
