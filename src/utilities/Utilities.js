import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

function getItems(category) {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    if(category){
        const q = query (
            itemsCollection,
            where('category', '==', category)
        );
        return getDocs(q);
    }
    const q = query (itemsCollection);
    return getDocs(q);
}

function getItem(itemId) {
    const db = getFirestore();
    const itemRef = doc(db, 'items', itemId);

    return getDoc(itemRef);
}
export {getItems, getItem}