export interface Product {
    id: number,
    title: string,
    description: string,
    portionsCount: number,
    bonus: string,
    text: string;
    extraText?: string,
    weight: number,
    inStock: boolean,
    selected: boolean
}