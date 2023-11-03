import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index-services",
  templateUrl: "./index-services.component.html",
  styleUrls: ["./index-services.component.css"],
})

/***
 * Services Component
 */
export class IndexServicesComponent implements OnInit {
  /***
   * Footer bg color set
   */
  footerClass: true;
  footerVariant = "bg-light";

  constructor(private modalService: NgbModal) {}

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-flip-h h1 text-primary",
      title: "Built for Everyone",
      description:
        "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
    },
    {
      icon: "uil uil-minus-path h1 text-primary",
      title: "Responsive Design",
      description:
        "This is the magic sauce. Could it be a simple landing page? Connected to 20 ad campaigns? or the other way round. All pathways are different, but all beginnings are the same. Buy now and lets get started.",
    },
    {
      icon: "uil uil-layers-alt h1 text-primary",
      title: "Build Everything",
      description:
        "Let me take care of it. Peace of mind. You run your business, I'll run our holistic digital marketing approach and report the good news. Whattaya say? Buy Now and let's get started.",
    },
  ];

  /**
   * Customer Testimonial Data
   */
  customerData = [
    {
      image: "assets/images/client/amazon.svg",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`,
      name: "Brett Mullins",
    },
    {
      image: "assets/images/client/google.svg",
      message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
      name: "Carl Oliver",
    },
    {
      image: "assets/images/client/lenovo.svg",
      message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`,
      name: "Barbara McIntosh",
    },
    {
      image: "assets/images/client/paypal.svg",
      message: `Thank you Bretta. I felt like you understood, empathetically where I was coming from when we met. I appreciate the time you've taken to help educate and teach my team. `,
      name: "Jill Webb",
    },
    {
      image: "assets/images/client/shopify.svg",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`,
      name: "Dean Tolle",
    },
    {
      image: "assets/images/client/spotify.svg",
      message: `It's Been An Absolute Pleasure To Work With Bretta. I Appreciate Your Genuine Care To My Success & Your Creative, Always Outside Ideas To Get There.`,
      name: "Christa Smith",
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
