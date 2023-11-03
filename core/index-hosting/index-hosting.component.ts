import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index-hosting",
  templateUrl: "./index-hosting.component.html",
  styleUrls: ["./index-hosting.component.css"],
})

/***
 * Hosting Component
 */
export class IndexHostingComponent implements OnInit {
  navClass = "nav-light";
  constructor() {}

  /**
   * Monthly Pricing Data
   */
  monthlyData = [
    {
      title: "Cloud Hosting",
      price: 0,
      list: [
        "2 GB Memory",
        "10 Free Optimization",
        "24/7 support",
        "Content Optimization",
      ],
      btn: "Buy Now",
    },
    {
      title: "Dedicated Hosting",
      price: 39,
      list: [
        "4 GB Memory",
        "10 Free Optimization",
        "24/7 support",
        "Content Optimization",
      ],
      btn: "Get Started",
    },
    {
      title: "VPS Hosting",
      price: 59,
      list: [
        "8 GB Memory",
        "10 Free Optimization",
        "24/7 support",
        "Content Optimization",
      ],
      btn: "Buy Now",
    },
    {
      title: "Shared Hosting",
      price: 79,
      list: [
        "16 GB Memory",
        "10 Free Optimization",
        "24/7 support",
        "Content Optimization",
      ],
      btn: "Buy Now",
    },
  ];

  /**
   * Yearly Pricing Data
   */
  yearlyData = [
    {
      title: "Cloud Hosting",
      price: 0,
      list: [
        "2 GB Memory",
        "10 Free Optimization",
        "24/7 support",
        "Content Optimization",
      ],
      btn: "Buy Now",
    },
    {
      title: "Dedicated Hosting",
      price: 29,
      list: [
        "4 GB Memory",
        "10 Free Optimization",
        "24/7 support",
        "Content Optimization",
      ],
      btn: "Get Started",
    },
    {
      title: "VPS Hosting",
      price: 39,
      list: [
        "8 GB Memory",
        "10 Free Optimization",
        "24/7 support",
        "Content Optimization",
      ],
      btn: "Buy Now",
    },
    {
      title: "Shared Hosting",
      price: 49,
      list: [
        "16 GB Memory",
        "10 Free Optimization",
        "24/7 support",
        "Content Optimization",
      ],
      btn: "Buy Now",
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

  ngOnInit(): void {}
}
