import QrCard, { Props as QrCardProps } from "./components/QrCard";

function App() {
  const qrData: QrCardProps = {
    title: "Improve your front-end skills by building projects",
    description:
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
    imageUrl: "/images/image-qr-code.png",
  };

  return (
    <main>
      <QrCard {...qrData} />

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/karstenpedersen">
          Karsten Pedersen
        </a>
        .
      </div>
    </main>
  );
}

export default App;
