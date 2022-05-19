import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import db from '../services/firebase';

function getItems(category) {
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
    const itemRef = doc(db, 'items', itemId);
    return getDoc(itemRef);
}

function formatPrice(price) {
    if(price)
     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return price;
}
export {getItems, getItem, formatPrice}