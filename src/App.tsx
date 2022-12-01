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
    </main>
  );
}

export default App;
