export type ProductModel = {
    id: string;
    name: string;
    price: number;
    category: string;
    images: string[];
    kaspiUrl: string;
    mainFeatures: Feature[];
    features: ImageFeature[];
    characteristics: Characteristic[];
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
