import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio-modern-six",
  templateUrl: "./portfolio-modern-six.component.html",
  styleUrls: ["./portfolio-modern-six.component.css"],
})

/***
 * Portfolio mordern six component
 */
export class PortfolioModernSixComponent implements OnInit {
  filterredImages: any;
  galleryFilter = "all";
  list = [
    {
      image: "assets/images/work/1.jpg",
      title: "Shifting Perspective",
      type: "Studio",
      category: "branding",
    },
    {
      image: "assets/images/work/2.jpg",
      title: "Colors Magazine",
      type: "Web Design",
      category: "designing",
    },
    {
      image: "assets/images/work/3.jpg",
      title: "Spa Cosmetics",
      type: "Developing",
      category: "photography",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/work/4.jpg",
      title: "Riser Coffee",
      type: "Branding",
      category: "development",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/work/5.jpg",
      title: "Dancing With Myself",
      type: "Photography",
      category: "branding",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/work/6.jpg",
      title: "New trends in SEO",
      type: "Business",
      category: "branding",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/work/7.jpg",
      title: "Shifting Perspective",
      type: "Studio",
      category: "designing",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/work/8.jpg",
      title: "Colors Magazine",
      type: "Web Design",
      category: "development",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/work/9.jpg",
      title: "Spa Cosmetics",
      type: "Developing",
      category: "branding",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/work/10.jpg",
      title: "Riser Coffee",
      type: "Branding",
      category: "designing",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/work/11.jpg",
      title: "Dancing With Myself",
      type: "Photography",
      category: "photography",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/work/12.jpg",
      title: "New trends in SEO",
      type: "Business",
      category: "development",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.filterredImages = this.list;
  }

  /***
   * Active all category selected
   */
  activeCategory(category: any) {
    this.galleryFilter = category;
    if (this.galleryFilter === "all") {
      this.filterredImages = this.list;
    } else {
      this.filterredImages = this.list.filter(
        (x) => x.category === this.galleryFilter
      );
    }
  }
}
