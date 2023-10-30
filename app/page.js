import Page from "@/app/[slug]/page";

export default function Home() {
  return (
    <Page params={{slug: "index"}} />
  );
}
