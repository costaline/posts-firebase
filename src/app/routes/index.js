import HomePage from "./home-page";
import PostsPage from "./posts-page";
import NewPostPage from "./new-post-page";
import AuthPage from "./auth-page";
import PostPage from "./post-page";

const routes = (user) => [
  {
    path: "/",
    component: HomePage,
    exact: true,
    isRender: true
  },

  {
    path: "/posts",
    component: PostsPage,
    exact: true,
    isRender: true
  },

  {
    path: "/new-post",
    component: NewPostPage,
    exact: false,
    isRender: user
  },

  {
    path: "/auth",
    component: AuthPage,
    exact: false,
    isRender: !user
  },

  {
    path: "/posts/:id",
    component: PostPage,
    exact: false,
    isRender: true
  }
];

export default routes;
