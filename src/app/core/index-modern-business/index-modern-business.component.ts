import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index-modern-business",
  templateUrl: "./index-modern-business.component.html",
  styleUrls: ["./index-modern-business.component.css"],
})

/***
 * Mordern Business Component
 */
export class IndexModernBusinessComponent implements OnInit {
  /***
   * Nav bg class add
   */
  navClass = "nav-light";

  /***
   * Footer bg color set
   */
  footerClass: true;
  footerVariant = "bg-light";

  constructor(private modalService: NgbModal) {}

  /***
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      900: {
        items: 1,
      },
    },
    nav: false,
  };

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Design & Development",
      description:
        "Let's Connect. Me Bretta You? I need to know you, to grow you. Give me what you can, I am fully transparent in thought and creative idea, which requires steps. We need to build digital trust. I look forward to bright positive futures, cause I believe in what I can do.",
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
   * Review Testimonial Data
   */
  reviewData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Brett Mullins ",
      designation: "C.E.O",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `" The advantage of its Latin origin and the relative meaninglessness
      of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention
      from the layout. "`,
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `" There is now an abundance of readable dummy texts. These are
      usually used when a text is required purely to fill a space. These alternatives to the classic Lorem
      Ipsum texts are often amusing and tell short, funny or nonsensical stories. "`,
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text
      composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling
      all the instances of the unusual word 'consectetur' he could find "`,
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have
      originated in the 16th century. "`,
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added
      or deleted at various positions within the text. "`,
    },
  ];

  ngOnInit(): void {}

  /**
   * Open modal for show the video
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }
  openModal(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }
  opencreative(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }
}
