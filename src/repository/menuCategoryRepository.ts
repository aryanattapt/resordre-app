import { isEmptyString } from '@/lib/util';
import {
    createDocument,
    deleteDocument,
    getDocumentById,
    getDocuments,
    updateDocument,
} from '../lib/mongodb';
import { 
    MenuCategory 
} from '../types/menu';

const COLLECTION = 'menu_categories';

export async function getAllCategories(): Promise<MenuCategory[]> {
    return await getDocuments<MenuCategory>(COLLECTION);
}

export async function getCategoryById(id: string): Promise<MenuCategory | null> {
    return await getDocumentById<MenuCategory>(COLLECTION, id);
}

export async function createCategory(data: Omit<MenuCategory, '_id'>) {
    const timestamp = new Date().toISOString();
    return await createDocument<MenuCategory>(COLLECTION, {
        ...data,
        createdDate: timestamp,
        updatedDate: timestamp,
    });
}

export async function updateCategory(updates: Partial<MenuCategory>) {
    const timestamp = new Date().toISOString();
    const id = updates._id || "";
    
    return await updateDocument<MenuCategory>(COLLECTION, id, {
        ...updates,
        updatedDate: timestamp,
    });
}

export async function deleteCategory(id: string) {
    return await deleteDocument(COLLECTION, id);
}
export async function searchCategories(query: string): Promise<MenuCategory[]> {
    return await getDocuments<MenuCategory>('categories', {
        name: { $regex: query, $options: 'i' },
    });
}