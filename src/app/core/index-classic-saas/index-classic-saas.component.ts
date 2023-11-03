import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index-classic-saas",
  templateUrl: "./index-classic-saas.component.html",
  styleUrls: ["./index-classic-saas.component.css"],
})

/***
 * Classic Saas Component
 */
export class IndexClassicSaasComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
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
}
