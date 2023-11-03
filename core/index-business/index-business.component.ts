import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index-business",
  templateUrl: "./index-business.component.html",
  styleUrls: ["./index-business.component.css"],
})

/***
 * Business Component
 */
export class IndexBusinessComponent implements OnInit {
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
   * Simple Pricing Data
   */
  simple_pricingData = [
    {
      title: "Free",
      price: 0,
      list: [
        "Full Access",
        "Enhanced Security",
        "Source Files",
        "1 Domain Free",
      ],
      btn: "Buy Now",
    },
    {
      warning: "Best",
      title: "Starter",
      price: 39,
      list: [
        "Full Access",
        "Source Files",
        "Free Appointments",
        "Free Installment",
        "Enhanced Security",
      ],
      btn: "Get Started",
    },
    {
      title: "Professional",
      price: 59,
      list: [
        "Full Access",
        "Enhanced Security",
        "Source Files",
        "1 Domain Free",
      ],
      btn: "Try It Now",
    },
  ];

  /**
   * Blog Data
   */
  blogData = [
    {
      image: "assets/images/blog/01.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/blog/02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/blog/03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  /**
   * Open modal for show the video
   * @param content content of modal
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
}
