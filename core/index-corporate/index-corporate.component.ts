import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index-corporate",
  templateUrl: "./index-corporate.component.html",
  styleUrls: ["./index-corporate.component.css"],
})

/**
 * Corporate Component
 */
export class IndexCorporateComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  /**
   * Nav Bg Class Add
   */
  navClass = "nav-light";
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: "horizontal",
    slidesPerView: 1,
    keyboard: true,
    navigation: true,
    pagination: false,
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
  onstructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  /**
   * Open modal for show the video
   */
  openModal(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }
}
