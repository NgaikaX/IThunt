import { questionDetails } from "@/api";
import QuestionForm from "@/components/QuestionForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState();

  useEffect(() => {
    if (id) {
      questionDetails(id as string).then((res) => {
        setData(res.data);
        /*console.log(
          "%c[res]-21",
          "font-size:13px; background:pink; color:#000",
          res
        );*/
      });
    }
  }, [id]);
  return <QuestionForm editData={data} />;
}