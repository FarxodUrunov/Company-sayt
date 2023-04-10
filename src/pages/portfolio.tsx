import Image from "next/image";
import { portfolioData } from "@/data/dataInfo";

const Portfolio = () => {
  return (
    <>
      <div className="container mx-auto pt-24">
        <h2 className="font-bold text-3xl mx-5">
          Works performed by our company
        </h2>
        <div className="flex flex-wrap justify-center gap-4 m-10">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={item.url} target="_blank">
                <Image
                  className="rounded-t-lg w-auto h-auto"
                  src={item.img}
                  alt="book"
                  priority
                  width={448}
                  height={348}
                />
              </a>
              <div className="px-5 py-2">
                <a href={item.url} target="_blank">
                  <h5 className="mb-0 text-xl font-medium tracking-tight text-gray-900">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-2 font-normal text-gray-500 text-sm">
                  {item.description}
                </p>
                <div>
                  <h3 className="font-medium mb-1 text-gray-900">
                    Client feedback:
                  </h3>
                  <p className="text-xs text-gray-500">{item.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
