import Image from "next/image";
import { companies } from "@/data/dataInfo";

const CarouselInfinite = () => {
  return (
    <div className="my-6 flex items-center justify-center">
      <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
          {companies.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center items-start w-[100px]"
              >
                <a href={item.url} target="_blank" className="w-24">
                  <Image
                    src={item.img}
                    alt={item.url}
                    width={150}
                    height={150}
                    priority
                  />
                </a>
              </div>
            );
          })}
          {companies.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center items-start w-[100px]"
              >
                <a href={item.url} target="_blank" className="w-24">
                  <Image
                    src={item.img}
                    alt={item.url}
                    width={150}
                    height={150}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselInfinite;
