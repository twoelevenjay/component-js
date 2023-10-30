import ErrorPage from "@/app/error";
import dynamic from "next/dynamic";
import { getPageBySlug } from "@/utils";
import dbLess from "@/dbLess";
// import ThemePage from "@/themes/default/page";
const ThemePage = dynamic(() => import(`@/themes/${dbLess.settings.themeName}/${dbLess.settings.templateName}`));

export default function Page({ params }) {
  const page = getPageBySlug(params.slug, dbLess);
  if (!page) {
    return <ErrorPage />;
  }
  return <ThemePage page={page} />;
}
