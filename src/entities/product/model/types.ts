// export type ProductModel = {
//     id: string;
//     name: string;
//     sellContent: {
//         imageUrl?: string;
//         text: string;
//         title: string;
//         images?:
//             { src: string, title?: string; text?: string, left?: string, top?: string; bottom?: string }[]
//     }[];
//     price: number;
//     category: string;
//     images: string[]
//     kaspiUrl: string;
//     mainFeatures: Feature[];
//     features: ImageFeature[];
//     bottomArr: Feature[]
//     characteristics: Characteristic[];
//     reviews?:{author:string, review:string, stars:number}[]
// }
//
// interface Feature {
//     type: string;
//     value: string;
// }
//
// interface ImageFeature {
//     value: string;
//     img: string;
// }
//
// interface Characteristic {
//     title: string;
//     value: string;
// }
type ProductImage = {
    src: string;
    title?: string;
    left?: string;
    top?: string;
    bottom?: string;
    text?: string;
};

export type SellContent = {
    imageUrl?: string;
    images?: ProductImage[];
    text: string;
    title: string;
    link?: {
        href: string;
        highlightWord: string;
        text:string;
    };
};

type MainFeature = {
    type: string;
    value: string;
};

type Feature = {
    value: string;
    img: string;
};

type Characteristic = {
    title: string;
    value: string;
};

type BottomFeature = {
    type: string;
    value: string;
};
type Review = {
    author: string;
    review: string;
    stars: number;
}

// Define the main model type
export type ProductModel = {
    id: string;
    name: string;
    price: number;
    gender: string;
    category: string;
    sellContent: SellContent[];
    images: string[];
    kaspiUrl: string;
    mainFeatures: MainFeature[];
    bottomArr: BottomFeature[];
    features: Feature[];
    characteristics: Characteristic[];
    reviews?:Review[]
};
