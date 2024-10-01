export type ProductModel = {
    id: string;
    name: string;
    sellContent: {
        imageUrl?: string;
        text: string;
        title: string;
        images?:
            { src: string, title?: string; text?: string, left?: string, top?: string; bottom?: string }[]
    }[];
    price: number;
    category: string;
    images: string[]
    kaspiUrl: string;
    mainFeatures: Feature[];
    features: ImageFeature[];
    bottomArr: Feature[]
    characteristics: Characteristic[];
    reviews?:{author:string, review:string, stars:number}[]
}

interface Feature {
    type: string;
    value: string;
}

interface ImageFeature {
    value: string;
    img: string;
}

interface Characteristic {
    title: string;
    value: string;
}
