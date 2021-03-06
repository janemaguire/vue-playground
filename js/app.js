var basic = new Vue ({
  el: '#basic',
  data: {
    message: 'Hello Vue, I was made with an ID'
  }
});

var classElement = new Vue ({
  el: '.class-element',
  data: {
    message: 'Hello Vue, I was made with a class'
  }
});

var me = new Vue ({
  el: '.me',
  data: {
    firstName: 'Jane',
    lastName: 'Maguire',
    town: 'London',
    age: 34
  }
});

var list = new Vue ({
    el: '#list',
    data: {
        menu: [
            {text: 'Cupcake'},
            {text: 'Avocado toast'},
            {text: 'Flat white'}
        ]
    }
});

var helloButton = new Vue ({
    el: '#hello',
    data: {},
    methods: {
        sayHello: function () {
            alert("Hello");
        }
    }
});

var shoppingList = new Vue ({
    el: '#shoppingList',
    data: {
        list: [ 'milk', 'eggs' ],
        item: ''
    },
    methods: {
        addToList: function () {
            this.list.push(this.item);
            delete(this.item);
        }
    }
});
