import { useRouter } from "next/router";

const DynamicData = () => {
  const router = useRouter();
  const urlValues = router.query.newsId;
  return (
    <div>
      <h1>this is dynamic - {urlValues} </h1>
    </div>
  );
};

export default DynamicData;
