import AutoChangeCarousel from "./AutoChangeCarousel";
import Category from "./Category ";
import { FlashSale } from "./FlashSale";

export default function Home() {
  return (
    <div className=" w-full h-auto">
      <AutoChangeCarousel></AutoChangeCarousel>
      <FlashSale></FlashSale>
      <Category></Category>
    </div>
  );
}
