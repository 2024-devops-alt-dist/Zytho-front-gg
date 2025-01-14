const Header = () => {
  return (
    <div className="w-auto relative h-auto">
      <p className="absolute flex flex-col justify-center border-r-2 bg-[--backgroudHeader] p-5 text-white text-center tracking-wide font-black top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:text-2xl xl:text-4xl xl:p-7">
        Découvrez l'univers de la bière artisanale : brasseries authentiques,
        saveurs uniques, et l'art du zythologue pour sublimer chaque
        dégustation.
      </p>
      <img
        className="w-full"
        src="/public/assets/breweries/header.jpg"
        alt=""
      />
    </div>
  );
};
export default Header;
