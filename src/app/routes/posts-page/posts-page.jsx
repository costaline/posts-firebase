import React, { useEffect } from "react";

import { firebase } from "~services/axios";

const PostsPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await firebase.get("/posts.json");
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>PostsPage works</h2>
    </section>
  );
};

export default PostsPage;
