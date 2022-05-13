import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'

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

    // const itemsCollection = collection(db, 'items');
    // const q = query (
    //     itemsCollection,
    //     where('id', '==', itemId),
    //     limit(1)
    // );
    // return getDoc(q);
    return getDoc(itemRef);
}
export {getItems, getItem}
