

const PageTitle = ({title,subTitle = ''}) => {
  return (
    <section className="page__title">
      <h4 className="heading-4">{subTitle}</h4>
      <h2 className="heading-2" >{title}</h2>

    </section>
  );
};

export default PageTitle;
