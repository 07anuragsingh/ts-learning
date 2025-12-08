let subs : number | string = '1M';
subs = 12;
subs = 'str';

let apiRequesttatus : 'pending' |'success'|'error'= 'pending';

// apiRequesttatus = 'done' Wrong

const orders = ['12','23','45','56','77'];

// let CurrentOrder; automically showing  'any
let CurrentOrder :string |undefined // Good way

for (const order of orders) {
    if(order ==='23'){
        CurrentOrder = order;
        break;
    }
 
}
console.log(CurrentOrder);
