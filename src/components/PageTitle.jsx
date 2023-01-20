import React from "react";

const PageTitle = ({title}) => {
  return (
    <section className="page__title">
      <h4 className="heading-4">new world</h4>
      <h2 className="heading-2">{title}</h2>
    </section>
  );
};

export default PageTitle;
