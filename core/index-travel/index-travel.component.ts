import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-index-travel",
  templateUrl: "./index-travel.component.html",
  styleUrls: ["./index-travel.component.css"],
})

/***
 * Travel Component
 */
export class IndexTravelComponent implements OnInit {
  /***
   * Nav bg light class add
   */
  navClass = "nav-light";

  constructor() {}

  /***
   * Current date Get
   */
  checkin = new Date();
  checkout = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  /***
   * Destination Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    dots: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 5,
      },
      900: {
        items: 8,
      },
    },
    nav: false,
  };

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
