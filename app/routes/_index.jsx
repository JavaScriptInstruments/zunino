import Nav from "../components/Nav";

export default function Index() {
  return (
    <div>
      <Nav title="Home Page"></Nav>
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2RNK1P0BYVrSCZEy_Sd1Ew%252F3417757448_4a6bdf36ce_o.jpg&width=910")' }}>
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg">This is a centered page with a background image.</p>
        </div>
      </div>
    </div>
  );
}
