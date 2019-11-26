import HomePage from "./home-page";
import PostsPage from "./posts-page";
import NewPostPage from "./new-post-page";
import AuthPage from "./auth-page";

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
    exact: false,
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
  }
];

export default routes;
