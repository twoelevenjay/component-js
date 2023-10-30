// @refresh reset
import Main from "@/components/html/Main";
import Section from "@/components/html/Section";
import H1 from "@/components/html/H1";
import H2 from "@/components/html/H2";
import P from "@/components/html/P";

export default function ThemePage({ page }) {
  return (
    <Main className="">
      <Section className="">
        <H1 className="">{page.title[0]}</H1>
      </Section>
      <Section className="">
        <H2 className="">{page.title[0]}</H2>
      </Section>
      <Section className="">
        <P className="">{page.content}</P>
      </Section>
    </Main>
  );
}
