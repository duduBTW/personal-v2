import useTranslation from "next-translate/useTranslation";

// components
import Image from "next/image";

type ExperienceCardProps = {
  miniature: string;
  title: string;
  subTitle: string;
  from: string;
  to: string;
};

const ExperienceCard = ({
  from,
  miniature,
  subTitle,
  title,
  to,
}: ExperienceCardProps) => {
  const { t } = useTranslation("common");

  return (
    <div className="mt-8 flex gap-6">
      <div>
        <Image
          width={40}
          height={40}
          src={miniature}
          alt=""
          className="object-contain object-center"
        />
      </div>
      <div className="flex-1">
        <div className="font-bold">{title}</div>
        <div className="mt-1 text-gray-500">{subTitle}</div>
        <div className="mt-3 text-violet-400">
          {from} {t("to")} <span className="uppercase">{to}</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
