import Posts from './Posts';

let Menu = [
  {
    label: "Home",
    path: "/",
    screen: "MainScreen"
  },
  {
    label: "Contact",
    path: "/contact",
    screen: "ContactScreen"
  }
];

for (let i = Posts.featured; i >= 0; i--) {
  let post = Posts[i];
  Menu.push({
    label: post.title,
    path: "/post/" + i,
    screen: "PostScreen"
  })
}

export default Menu;
