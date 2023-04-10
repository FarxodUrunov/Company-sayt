import Image from "next/image";
import docs from "../../public/docs.png";

const Docs = () => {
  return (
    <>
      <div className="container mx-auto pt-24">
        <div className="h-[80vh] p-2 relative">
          <Image src={docs} alt="docs" fill style={{ objectFit: "contain" }} />
        </div>
      </div>
    </>
  );
};

export default Docs;
