// SubstackFeed.js
import React, { useEffect } from "react";

const SubstackFeed = () => {
  useEffect(() => {
    // Create the script element for the Substack feed
    const script = document.createElement("script");
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;

    // Set the configuration for the Substack feed
    window.SubstackFeedWidget = {
      substackUrl: "elainveste.substack.com",
      posts: 3,
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="substack-feed-embed"></div>;
};

export default SubstackFeed;
