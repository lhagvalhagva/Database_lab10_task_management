import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  return <h2>Sain uu , {router.query.name}</h2>;
};
