import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  public productos = [
    {
      id:'1',
      titulo:'Langosta',
      url: "https://www.foodnewslatam.com/images/stories/2022/Octubre/C%C3%B3mo_la_langosta_se_convirti%C3%B3_en_un_platillo_de_lujo.jpg",
      comentarios : ["Delicioso"]
    },
    {
      id:'2',
      titulo:'Bolitas de arroz',
      url: "https://i.ytimg.com/vi/ulBAdsdjg0Y/maxresdefault.jpg",
      comentarios : ["Delicioso"]
    },
    {
      id:'3',
      titulo:'Carne',
      url: "https://static.dw.com/image/15800920_1006.jpg",
      comentarios : ["Delicioso"]
    },
    {
      id:'4',
      titulo:'Ostras',
      url: "https://media.vogue.mx/photos/5c07156e6d624ed029a1c150/master/pass/ostras_cover_248.jpg",
      comentarios : ["Delicioso"]
    },
    {
      id:'5',
      titulo:'Postre de chocolate',
      url: "https://i.ytimg.com/vi/G3OQeqA7vSg/maxresdefault.jpg",
      comentarios : ["Delicioso"]
    },
    {
      id:'6',
      titulo:'Postre de fresa',
      url: "https://cdn0.recetasgratis.net/es/posts/5/5/7/postre_de_fresas_33755_orig.jpg",
      comentarios : ["Delicioso"]
    }
  ];

 

  constructor() {}

  ngOnInit() {

    console.log(this.productos)
  }


}
