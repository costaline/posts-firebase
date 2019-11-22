import HomePage from "./home-page";
import PostsPage from "./posts-page";
import NewPostPage from "./new-post-page";

export const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/posts", component: PostsPage, exact: false },
  { path: "/new-post", component: NewPostPage, exact: false }
];