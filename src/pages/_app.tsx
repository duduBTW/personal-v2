import useTranslation from "next-translate/useTranslation";
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className="min-h-screen bg-[length:100vw_auto] lg:bg-[url('/bg.svg')]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="flex flex-col items-center justify-center bg-gray-800 py-24 px-12">
      <h3 className="mb-3 text-sm uppercase text-gray-300">
        {t("contactTitle")}
      </h3>
      <p className="mb-12 text-center text-xl text-white">{t("contactDesc")}</p>
      <a
        href="mailto:dudubtway@gmail.com"
        className="text-xl font-bold text-violet-300 underline underline-offset-2"
      >
        dudubtway@gmail.com
      </a>
    </footer>
  );
};

export default MyApp;
