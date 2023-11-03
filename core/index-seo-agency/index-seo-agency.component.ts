import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { NgxMasonryOptions } from "ngx-masonry";

@Component({
  selector: "app-index-seo-agency",
  templateUrl: "./index-seo-agency.component.html",
  styleUrls: ["./index-seo-agency.component.css"],
})
export class IndexSeoAgencyComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
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
        items: 2,
      },
      900: {
        items: 3,
      },
    },
    nav: false,
  };

  seoAgency = [
    {
      images: "assets/images/seo/6.png",
    },
    {
      images: "assets/images/seo/4.png",
    },
    {
      images: "assets/images/seo/7.png",
    },
    {
      images: "assets/images/seo/5.png",
    },
    {
      images: "assets/images/seo/3.png",
    },
    {
      images: "assets/images/seo/1.png",
    },
    {
      images: "assets/images/seo/2.png",
    },
  ];

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-chart-line h1 text-primary",
      title: "Grow your traffic",
      description:
        "Let's Connect. Me Bretta You? I need to know you, to grow you. Give me what you can, I am fully transparent in thought and creative idea, which requires steps. We need to build digital trust. I look forward to bright positive futures, cause I believe in what I can do.",
    },
    {
      icon: "uil uil-adjust-circle h1 text-primary",
      title: "Get quality leads",
      description:
        "This is the magic sauce. Could it be a simple landing page? Connected to 20 ad campaigns? or the other way round. All pathways are different, but all beginnings are the same. Buy now and lets get started.",
    },
    {
      icon: "uil uil-award h1 text-primary",
      title: "Drive more sell",
      description:
        "Let me take care of it. Peace of mind. You run your business, I'll run our holistic digital marketing approach and report the good news. Whattaya say? Buy Now and let's get started.",
    },
  ];

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

  isActive: string = "month";

  /**
   * Tab change value
   * @param value
   */
  changeTab(value: string) {
    this.isActive = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
