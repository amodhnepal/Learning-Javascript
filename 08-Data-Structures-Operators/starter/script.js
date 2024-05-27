'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours: {
    thu: {
      open: 12,
      close: 22,
      },
      fri: {
        open: 11,
        close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
          },
          },


  order:function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  orderDelivery:function({starterIndex=1, mainIndex=0,time='20:00',address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);

  },
  orderPaste:function(ing1,ing2,ing3){
    console.log(`Here os your delicious pasta with ${ing1},${ing2},${ing3}`);
  }
};

// MAps
const rest =new Map();
rest.set('name','Classico Italiano');
rest.set(1,'Firenze,Italy');
console.log(rest.set(2,'Lisbon,Portugal'));

rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open',11)
.set('close',23)
.set(true,'We are open :D')
.set(false,'We are closed :(');
console.log(rest.get('name'));
console.log(rest.get(true));

const time=21;
console.log( rest.get(time>rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();



//  const orderSet=new Set([
//   'Pasta',
//   'Pasta',
//   'Pasta',
//   'Pizza',
//   'Risotto',
//  ]);
//  console.log(orderSet);
//  console.log(new Set('jonas'));
//  console.log(orderSet.size);
//  console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);



// for(const order of orderSet) console.log(order);

// // Example
// const staff=['Waiter', 'Chef', 'Waiter', 'Manager'];
// const staffUnique= [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager']));
// const arr=[1,2,...[3,4]];
// const [a,b,...others]=[1,2,3,4,5];
// console.log(a,b,others);

// const arr=[7,8,9];
// const badNewArr=[1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);
// const newArr=[1,2,...arr];
// console.log(newArr);

// const newMenu=[...restaurant.mainMenu,'gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy=[...restaurant.mainMenu];
// // Join 2 arrays
// const menuJoin=[...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menuJoin);
// // Iterables: arrray, strings,maps,sets. NOT objects
// const str='Jonas';
// const letters=[...str,'','S.'];
// console.log(letters);
// console.log(...str);

// const ingredients=[prompt('Let\'s make pasta! Ingredients 1?'),prompt('Ingredients 2?'),prompt('Ingredients 3?')];
// console.log(ingredients);

// restaurant.orderPaste(...ingredients);

// // Objects
// const newRestaurant={foundedIn:1998,...restaurant,founder:'Guiseppe'}
// console.log(newRestaurant);
// const restaurantCopy={...restaurant};
// restaurantCopy.name='Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // restaurant.orderDelivery({
// //   time:'22:30',
// //   address:'Via del Sole, 21',
// //   mainIndex:2,
// //   starterIndex:2,
// // });


// const {name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);
// const {name:restaurantName,
//   openingHours:hours,
//   categories:tags,}=restaurant;
// console.log(restaurantName,hours,tags);
// const {menu=[],starterMenu:starters=[]}=restaurant;
// console.log(menu,starters);
// // Mutating Variables
// let a=111;
// let b=999;
// const obj={a:23,b:7,c:14};
// ({a,b}=obj);
// console.log(a,b);


// // nested objects
// const {fri:{open,close}}=openingHours;
// console.log(open,close);


// const arr =[2 , 3, 4];
// const a =arr[0];
// const b =arr[1];
// const c =arr[2];

// const [x,y,z]=arr;
// console.log(x,y,z);

// let [main, ,secondary]=restaurant.categories;
// console.log(first,second);


// // Switching Variables
// // const temp=main;
// // main=secondary;
// // secondary=temp;
// // console.log(main,secondary);
// [secondary,main]=[main,secondary];
// console.log(main,secondary);


// // Recieve 2 return values from a function
// const [starter, mainCourse]=restaurant.order(2,0);
// console.log(starter.mainCourse);


// const nested=[2,4,[5,6]];
// // const [i, ,j]=nested;
// // console.log(i,j);
// const [i,, [j,k]]=nested;
// console.log(i,j,k);


// // default values
// const [p=1,q=1,r=1]=[8,9];
// console.log(p,q,r);