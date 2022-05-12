import IMG_BUNNYKINGDOM from '../components/assets/img/BUNKIN_1.jpg'
import IMG_BHOUSEHILL from '../components/assets/img/BHH_2.jpg'
import IMG_TTBURRITO from '../components/assets/img/TTBURR_1.jpg'
import IMG_NLTNUP from '../components/assets/img/NLTNUP_1.jpg'
import IMG_CATAN from '../components/assets/img/CATAN_1.jpg'
import IMG_HDP from '../components/assets/img/HDP_1.jpg'
import IMG_VLLNS from '../components/assets/img/VLLNS_1.jpg'
import IMG_AVTREN from '../components/assets/img/AVTREN_1.jpg'

const itemsBknd = [
    {
        id:      0,
        title:  'Bunny Kingdom',
        price:  '$13.401',
        img:    IMG_BUNNYKINGDOM,
        stock:  6,
        category: 'family',
        players:  '2-4 jugadores',
        age:    '14+',
        ptime:  '45 min.'
    },
    {
        id:      1,
        title:  'Betrayal at House on the Hill',
        price:  '$13.490',
        img:    IMG_BHOUSEHILL,
        stock:  2,
        category: 'strategy',
        players:  '3-6',
        age:    '12+',
        ptime:  '60 min.'
    },
    {
        id:      2,
        title:  'Throw Throw Burrito',
        price:  '$9.040',
        img:    IMG_TTBURRITO,
        stock:  10,
        category: 'family',
        players:  '2-6',
        age:    '7+',
        ptime:  '60 min'
    },
    {
        id:      3,
        title:  'No lo testeamos ni un poco',
        price:  '$1.750',
        img:    IMG_NLTNUP,
        stock:  12,
        category: 'cards',
        players:  '2-6',
        age:    '7+',
        ptime:  '60 min'
    },
    {
        id:      4,
        title:  'Catán',
        price:  '$9.800',
        img:    IMG_CATAN,
        stock:  4,
        category: 'strategy',
        players:  '3-4',
        age:    '10+',
        ptime:  '75 min'
    },
    {
        id:      5,
        title:  'H.D.P.',
        price:  '$4.000',
        img:    IMG_HDP,
        stock:  12,
        category: 'cards',
        players:  '2-6',
        age:    '18+',
        ptime:  '30-90 min'
    },
    {
        id:      6,
        title:  'Villainous',
        price:  '$9.730',
        img:    IMG_VLLNS,
        stock:  1,
        category: 'family',
        players:  '2-6',
        age:    '10+',
        ptime:  '50 min'
    },
    {
        id:      7,
        title:  'Aventureros al Tren!',
        price:  '$11.890',
        img:    IMG_AVTREN,
        stock:  2,
        category: 'family',
        players:  '2-5',
        age:    '8+',
        ptime:  '60 min'
    }
];

function getItems() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsBknd);
        }, 2000);
    });
    return myPromise;
}

function getItem(itemId) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsBknd.find(item => item.id === parseInt(itemId)));
        }, 2000);
    });
    return myPromise;
}
export {getItems, getItem}
