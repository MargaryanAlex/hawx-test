import "./style.scss";
import { useTranslation } from "react-i18next";
interface IProps {
  img: string;
  title: string;
  content: string;
  link?: string | null;
}
const NewsCard = ({ img, title, content, link }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className="P-newsCard">
      <img src={img} alt="news" width="247" height="137" />
      <div className="P-content">
        <h5>{title}</h5>
        <p>{content}</p>

        {link ? (
          <span
            onClick={() => {
              (window.open(link, "_blank") as Window).focus();
            }}
          >
            {t("READ_MORE-text")}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default NewsCard;
