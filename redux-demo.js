const redux = require('redux');

const counterReducer = (ข้อมูลปัจจุบันที่มี = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: ข้อมูลปัจจุบันที่มี.counter + 1
        };
    };

    if (action.type === 'decrement') {
        return {
            counter: ข้อมูลปัจจุบันที่มี['counter'] - 1
        }
    }

    return ข้อมูลปัจจุบันที่มี;

    // จริง ๆ return data type อะไรก็ได้ ไม่ใช้ object อย่างเดียว
};
/*
-- createStore function จำเป็นต้องรู้ว่า function อันไหนที่
.มีหน้าที่เปลี่ยน mutate, changes (จัดการ) ที่เก็บ(store) หรือ
.function ไหน ที่ทำงานร่วมกับ ที่เก็บ
-- counterReducer and counterSubscriber functions will
.be exucuted by redux
*/
const store = redux.createStore(counterReducer);

// console.log(store.getState())

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
};


store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });

store.dispatch({ type: 'decrement' })