export const INITIAL_TYPES = [
  {
    name: 'dog',
    template:
      "<div\r\n  style='\r\n    padding: 0.3em 1em;\r\n    display: flex;\r\n    gap: 1em;\r\n    max-height: 140px;\r\n    overflow: hidden;\r\n  '\r\n>\r\n  <div>\r\n    <img style='height: 80px' src='{{data.picture}}' />\r\n  </div>\r\n  <div>\r\n    <span class='ant-tag'>dog</span>\r\n    {{#each data.tags}}\r\n      <span class='ant-tag'>{{.}}</span>\r\n    {{/each}}\r\n    <div style='display:flex; align-items:baseline; gap: 1em'>\r\n      <h1 style='margin-bottom: 0'>\r\n        {{data.name}}\r\n      </h1>\r\n      <i>{{data.age}}</i>\r\n    </div>\r\n    <p>{{data.about}}</p>\r\n  </div>\r\n</div>",
    defaults: {
      type: 'dog',
      data: {
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqwgS0r8OYnN9EK6xtPA47NkDMquu9BSGSoGHrCq73UNWZ8ZGAj6ipV9LMhkiy2x6reg&usqp=CAU',
        age: 22,
        name: 'sparky',
        gender: 'male',
        about:
          'Vestibulum eget leo nec est pellentesque interdum at ac magna. Morbi eget condimentum velit. Donec quis mi molestie, vulputate leo eget, lobortis est. Nam lectus mauris, sodales et maximus eget, commodo quis turpis. Praesent scelerisque tellus nulla, in volutpat dolor vestibulum non. Donec ut mattis nulla, non bibendum justo. Fusce vestibulum hendrerit dui, ac vehicula lacus pretium sed.',
        tags: ['good boy']
      }
    }
  },
  {
    name: 'person',
    defaults: {
      label: 'Coleen Whitfield',
      data: {
        avatar:
          'https://avatars.dicebear.com/api/micah/618130330e2f00a5984b8be5.svg',
        name: 'Coleen Whitfield',
        gender: 'female',
        email: 'coleenwhitfield@delphide.com'
      }
    },
    template:
      '<li class="ant-list-item" style="padding:1em 2em">\r\n  <div class="ant-list-item-meta">\r\n    <div class="ant-list-item-meta-avatar">\r\n      <span class="ant-avatar ant-avatar-circle ant-avatar-image" style="width:80px; height:80px"\r\n        ><img src="{{data.avatar}}"\r\n      /></span>\r\n    </div>\r\n    <div>\r\n      <h4 class="ant-list-item-meta-title">\r\n        {{data.name}}\r\n      </h4>\r\n      <div class="ant-list-item-meta-description">\r\n          {{data.email}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n',
    id: 2
  },
  {
    name: 'template',
    defaults: {},
    template:
      "<div class='ant-card'>\r\n  <div class='ant-card-head'>\r\n    <div class='ant-card-head-wrapper'>\r\n      <div class='ant-card-head-title'>Card title</div>\r\n      <div class=\"ant-card-extra\"><span class=\"ant-tag ant-tag-green\">tag</span></div>\r\n    </div>\r\n  </div>\r\n  <div class='ant-card-body'>Card content</div>\r\n</div>"
  }
]

export const INITIAL_OBJECTS = [
  // DOGS

  {
    type: 'dog',
    data: {
      picture: 'https://images.dog.ceo/breeds/bluetick/n02088632_874.jpg',
      age: 4,
      name: 'Golden',
      gender: 'male',
      about:
        'Exercitation aliqua reprehenderit aliquip amet nostrud. Ex duis qui nostrud ut pariatur. Magna in ullamco esse qui quis dolore. Exercitation magna id dolor exercitation adipisicing officia voluptate qui amet consequat labore quis. Aliquip occaecat anim est ut quis dolore sunt amet reprehenderit dolore anim. Consequat mollit cupidatat labore proident et et sit sit excepteur nostrud amet amet. Occaecat excepteur pariatur est aliqua occaecat duis ad quis sit tempor velit nostrud dolor culpa.\r\n',
      tags: ['occaecat', 'tempor']
    }
  },
  {
    type: 'dog',
    data: {
      picture: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_4000.jpg',
      age: 16,
      name: 'Ruth',
      gender: 'female',
      about:
        'Mollit qui nostrud dolor incididunt enim ipsum cupidatat eu adipisicing adipisicing minim. Cillum labore culpa nisi ea excepteur consectetur. Aliquip magna qui minim dolore Lorem occaecat minim velit cillum Lorem anim. In sunt do dolor sunt labore ipsum ullamco laborum. Ipsum amet proident veniam dolor laboris veniam eu esse.\r\n',
      tags: ['ipsum', 'officia']
    }
  },
  {
    type: 'dog',
    data: {
      picture: 'https://images.dog.ceo/breeds/hound-plott/hhh_plott002.JPG',
      age: 5,
      name: 'Juliette',
      gender: 'female',
      about:
        'Laborum anim officia et est. Voluptate mollit culpa dolor voluptate amet aliqua reprehenderit. Velit esse consequat pariatur minim tempor ad. Aliqua reprehenderit labore sint ea cupidatat eu ipsum quis culpa nisi nulla aliqua. Laboris adipisicing in aute quis aliqua ut non voluptate anim. Dolor proident laborum incididunt aute voluptate. Exercitation sunt eiusmod veniam id nostrud velit irure sint ex sint.\r\n',
      tags: ['dolore']
    }
  },
  {
    type: 'dog',
    data: {
      picture: 'https://images.dog.ceo/breeds/pomeranian/n02112018_6110.jpg',
      age: 15,
      name: 'Franklin',
      gender: 'male',
      about:
        'Ut eu voluptate laboris qui excepteur nisi aliqua. Magna duis fugiat magna labore labore mollit exercitation laboris minim. In excepteur est eiusmod labore et. Magna eiusmod culpa in in anim fugiat cupidatat.\r\n',
      tags: ['excepteur', 'voluptate', 'nulla']
    }
  },
  {
    type: 'dog',
    data: {
      picture:
        'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_4546.jpg',
      age: 10,
      name: 'Sherrie',
      gender: 'female',
      about:
        'Consectetur nisi officia mollit veniam sint ea proident aliquip ipsum. Sit sunt ad enim tempor culpa. Fugiat eu qui qui ea ex culpa consequat officia.\r\n',
      tags: ['amet', 'labore', 'cupidatat']
    }
  },
  {
    type: 'dog',
    data: {
      picture: 'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_839.jpg',
      age: 1,
      name: 'Kari',
      gender: 'female',
      about:
        'Proident et culpa nulla labore Lorem enim minim irure eiusmod aliquip dolor. Ea commodo in dolor ut officia culpa cillum. Voluptate irure labore reprehenderit cupidatat exercitation in id officia cupidatat. Est excepteur est est enim cillum laboris commodo nisi consectetur tempor esse sint.\r\n',
      tags: ['officia', 'adipisicing', 'cillum']
    }
  },
  {
    type: 'dog',
    data: {
      picture: 'https://images.dog.ceo/breeds/doberman/n02107142_9362.jpg',
      age: 11,
      name: 'Mcfadden',
      gender: 'male',
      about:
        'Do esse commodo in commodo est in excepteur cillum. Eu ad cillum qui culpa eiusmod. Sit duis labore consequat excepteur irure minim velit fugiat sunt enim aliquip voluptate. Eiusmod veniam consectetur mollit voluptate ea proident labore ex nostrud Lorem tempor cupidatat. Nostrud ex qui tempor nisi reprehenderit et adipisicing adipisicing non velit sit id.\r\n',
      tags: ['nostrud', 'magna', 'cupidatat']
    }
  },
  {
    type: 'dog',
    data: {
      picture: 'https://images.dog.ceo/breeds/papillon/n02086910_2648.jpg',
      age: 1,
      name: 'Guy',
      gender: 'male',
      about:
        'Commodo elit aute qui cupidatat occaecat mollit ea nostrud do ea veniam laborum. Sunt sunt sunt ullamco voluptate labore ut id voluptate incididunt consectetur pariatur. Laboris enim incididunt nulla deserunt. Irure ipsum aute anim ullamco ipsum ipsum quis. Labore adipisicing amet anim excepteur aliquip et non ipsum tempor tempor occaecat anim enim nostrud.\r\n',
      tags: ['amet']
    }
  },

  // PERSONS

  {
    type: 'person',
    data: {
      avatar:
        'https://avatars.dicebear.com/api/micah/618130246ede0616bbd820be.svg',
      name: 'Therese Mckinney',
      gender: 'female',
      email: 'theresemckinney@delphide.com'
    }
  },
  {
    type: 'person',
    data: {
      avatar:
        'https://avatars.dicebear.com/api/micah/618130245e1190c690e4d77d.svg',
      name: 'Glenda Weiss',
      gender: 'female',
      email: 'glendaweiss@delphide.com'
    }
  },
  {
    type: 'person',
    data: {
      avatar:
        'https://avatars.dicebear.com/api/micah/61813024f6d174972d0768b0.svg',
      name: 'Burke Graham',
      gender: 'male',
      email: 'burkegraham@delphide.com'
    }
  },
  {
    type: 'person',
    data: {
      avatar:
        'https://avatars.dicebear.com/api/micah/61813024569de99ebff297bc.svg',
      name: 'Grimes Heath',
      gender: 'male',
      email: 'grimesheath@delphide.com'
    }
  },
  {
    type: 'person',
    data: {
      avatar:
        'https://avatars.dicebear.com/api/micah/618130243ffc685e208d661c.svg',
      name: 'Pearson Mccall',
      gender: 'male',
      email: 'pearsonmccall@delphide.com'
    }
  },
  {
    type: 'person',
    data: {
      avatar:
        'https://avatars.dicebear.com/api/micah/61813024c54a186fef9a0712.svg',
      name: 'Betsy Crawford',
      gender: 'female',
      email: 'betsycrawford@delphide.com'
    }
  }
]
