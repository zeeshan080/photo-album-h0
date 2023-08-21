import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
  
      </main>
    </Suspense>
  );
}
