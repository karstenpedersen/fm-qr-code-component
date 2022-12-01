export type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

const QrCard = ({ title, description, imageUrl }: Props) => {
  return (
    <article className="qr-card">
      <img src={imageUrl} alt="Qr Code" />
      <div className="qr-card--content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default QrCard;
