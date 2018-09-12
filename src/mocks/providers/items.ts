import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Burt",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Glen",
        "profilePic": "assets/img/speakers/giraffe.jpg",
        "about": "Glen is an Giraffe."
      },
      {
        "name": "Issac",
        "profilePic": "assets/img/speakers/iguana.jpg",
        "about": "Issac is an Iguana."
      },
      {
        "name": "Katty",
        "profilePic": "assets/img/speakers/kitten.jpg",
        "about": "Katty is an Kitten."
      },
      {
        "name": "Lisa",
        "profilePic": "assets/img/speakers/lion.jpg",
        "about": "Lisa is an Lion."
      },
      {
        "name": "Molly",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "Henry",
        "profilePic": "assets/img/speakers/rabbit.jpg",
        "about": "Henry is an Rabbit."
      },
      {
        "name": "Terry",
        "profilePic": "assets/img/speakers/turtle.jpg",
        "about": "Terry is an Turtle."
      },
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
