import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>this is details page</h1>
      <Link href="/details/this is dynamic routing">
        <a>
          <h2>this is routing link</h2>
        </a>
      </Link>
    </div>
  );
};

export default index;
