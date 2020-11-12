
const setSortBy = (name:any) => ({
    type: 'SET_SORT_BY',
    payload: name
});

const setCategory = (catIndex:any) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
})

console.log(setCategory);


export default setSortBy