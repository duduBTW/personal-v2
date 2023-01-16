import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";

// components
import Translate2Icon from "remixicon-react/Translate2Icon";
import IconButton from "components/icon/Button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Nav = ({
  children,
  startIcon,
}: {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
}) => {
  return (
    <nav className="relative pt-10 pb-3">
      <div className="relative flex justify-between px-5 text-violet-600  md:container">
        <div className="flex items-center gap-6 text-violet-400">
          {startIcon}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton>
                <Translate2Icon />
              </IconButton>
            </DropdownMenu.Trigger>

            <LanguageMenu />
          </DropdownMenu.Root>
        </div>
        <div className="text-xl font-medium">{children}</div>
        {children && (
          <div className="absolute right-16 -bottom-3 h-px w-14 bg-violet-300 md:w-20" />
        )}
      </div>
      <div className="absolute right-16 bottom-0 left-0 h-px w-6 bg-violet-300 md:w-12" />
    </nav>
  );
};

const LanguageMenu = () => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content align="start" className="z-30 mt-3 bg-gray-50">
        <CountryMenuItem
          lang="en"
          flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
        />
        <CountryMenuItem
          lang="pt-BR"
          flagUrl="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png"
        />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
};

const CountryMenuItem = ({
  lang,
  flagUrl,
}: {
  lang: string;
  flagUrl: string;
}) => {
  const { lang: activeLang, t } = useTranslation("common");
  const isActiveLang = lang === activeLang;

  const setLang = () => {
    setLanguage(lang).catch((error) => console.error(error));
  };

  return (
    <DropdownMenu.Item
      onClick={setLang}
      className="flex cursor-pointer items-center gap-4 py-3 pl-4 pr-8 focus:bg-violet-100"
    >
      <img
        src={flagUrl}
        alt={`${lang} flag`}
        className="aspect-square w-6 rounded-full object-cover"
      />
      <span className={isActiveLang ? "font-medium text-violet-500" : ""}>
        {t(lang)}
      </span>
    </DropdownMenu.Item>
  );
};

export default Nav;
