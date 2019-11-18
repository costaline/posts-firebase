import HomePage from "./home-page";
import PostsPage from "./posts-page";

export const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/posts", component: PostsPage, exact: false }
];
