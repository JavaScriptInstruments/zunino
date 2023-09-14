import image1 from "../photos/image-1.jpg";
import image2 from "../photos/image-2.jpg";
import image3 from "../photos/image-3.jpg";
import image4 from "../photos/image-4.jpg";
import image5 from "../photos/image-5.jpg";

export default function Photos() {
  return (
    <div className="mt-16 sm:mt-20 mb-20">
      <div className="p-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Lorem ipsum dolor sit amet. ✨
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 mb-20">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image) => (
          <div
            key={image.src}
            className={'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
