import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{`PN movie | ${title}`}</title>
    </Helmet>
  );
};
