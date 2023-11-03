import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index-freelancer",
  templateUrl: "./index-freelancer.component.html",
  styleUrls: ["./index-freelancer.component.css"],
})

/***
 * Freelancer Component
 */
export class IndexFreelancerComponent implements OnInit {
  /***
   * Footer bg color set
   */
  footerClass: true;
  footerVariant = "bg-light";

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

  constructor() {}

  ngOnInit(): void {}
}
