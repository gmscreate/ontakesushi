import g01 from "@/assets/gallery/gallery-01.png";
import g02 from "@/assets/gallery/gallery-02.png";
import g03 from "@/assets/gallery/gallery-03.png";
import g04 from "@/assets/gallery/gallery-04.png";
import g05 from "@/assets/gallery/gallery-05.png";
import g06 from "@/assets/gallery/gallery-06.png";
import g07 from "@/assets/gallery/gallery-07.png";
import g08 from "@/assets/gallery/gallery-08.png";
import g09 from "@/assets/gallery/gallery-09.png";
import g10 from "@/assets/gallery/gallery-10.png";
import g11 from "@/assets/gallery/gallery-11.png";
import g12 from "@/assets/gallery/gallery-12.png";

export type GalleryPhoto = {
  src: string;
  label: string;
};

export const GALLERY_PREVIEW_COUNT = 6;

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { src: g01, label: "Combinado Ontake" },
  { src: g02, label: "Sushi especial" },
  { src: g03, label: "Combinado da casa" },
  { src: g04, label: "Hot rolls" },
  { src: g05, label: "Salmão fresco" },
  { src: g06, label: "Pratos da cozinha" },
  { src: g07, label: "Uramaki Ontake" },
  { src: g08, label: "Montagem artesanal" },
  { src: g09, label: "Combinado premium" },
  { src: g10, label: "Detalhes da casa" },
  { src: g11, label: "Sashimi e nigiri" },
  { src: g12, label: "Criações Ontake" },
];
