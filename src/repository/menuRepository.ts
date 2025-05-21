import { Filter } from 'mongodb';
import {
    createDocument,
    deleteDocument,
    getDocumentById,
    getDocuments,
    updateDocument,
} from '../lib/mongodb';
import { 
    MenuItem 
} from '../types/menu';

const COLLECTION = 'menus';

export async function getAllMenus(): Promise<MenuItem[]> {
    return await getDocuments<MenuItem>(COLLECTION);
}

export async function getMenuById(id: string): Promise<MenuItem | null> {
    return await getDocumentById<MenuItem>(COLLECTION, id);
}

export async function createMenu(data: Omit<MenuItem, '_id'>) {
    const timestamp = new Date().toISOString();
    return await createDocument<MenuItem>(COLLECTION, {
        ...data,
        createdDate: timestamp,
        updatedDate: timestamp,
    });
}

export async function updateMenu(id: string, updates: Partial<MenuItem>) {
    const timestamp = new Date().toISOString();
    return await updateDocument<MenuItem>(COLLECTION, id, {
        ...updates,
        updatedDate: timestamp,
    });
}

export async function deleteMenu(id: string) {
    return await deleteDocument(COLLECTION, id);
}

export async function searchMenuItems(query: string): Promise<MenuItem[]> {
    const filter: Filter<MenuItem> = {
        $or: [
        { namaMenu: { $regex: query, $options: 'i' } },
        { deskripsi: { $regex: query, $options: 'i' } },
        { notes: { $regex: query, $options: 'i' } },
        { 'variant.variantName': { $regex: query, $options: 'i' } },
        { 'variant.deskripsi': { $regex: query, $options: 'i' } },
        ],
    };

    return await getDocuments<MenuItem>('menus', filter);
}