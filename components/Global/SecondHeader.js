import { useRouter } from "next/router";

const SecondHeader = () => {
  const router = useRouter();

  const pageTitle = router.pathname.substr(1);

  return (
    <div className="second_header">
      <div className="hero">
        <div className="hero_frame">
          <img src="/images/headframe.png" />
        </div>
        <h1>{pageTitle}</h1>
        <p>
          <span>Home</span>-<span>{pageTitle}</span>
        </p>
      </div>
    </div>
  );
};

export default SecondHeader;
