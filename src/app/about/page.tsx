import React from "react";

// when routes have multiple metadata deeper segments take priority
// metadata object wont work in client components
export const metadata = {
  title: "About page",
};

const About = () => {
  return <div>About</div>;
};

export default About;
