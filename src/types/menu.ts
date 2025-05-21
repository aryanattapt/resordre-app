export interface MenuVariant {
    name: string;
    description: string;
    price: number;
}

export interface MenuItem {
    _id?: string;
    categoryId: string;
    name: string;
    description: string;
    notes?: string;
    photos?: string[];
    variants: MenuVariant[];
    createdDate: string;
    updatedDate: string;
}

export interface MenuCategory {
    _id?: string;
    name: string;
    createdDate: string;
    updatedDate: string;
}