interface SearchOptions {
    columnName:string|number,
    searchText:string
}

export function searchData(data:object[], options:SearchOptions) {
    const {columnName, searchText} = options

    if (data.length === 0) return []

    else if(searchText === "") return(data)

    else if(!( columnName in data[0])){
        throw new ReferenceError(`"${columnName}" this key does not exist`)
    }
    else{
        return(data.filter((item: object) => {
            let val = String(item[columnName as keyof object]);
            val = val.toLowerCase();
            let lengthOfSearchText = searchText.length;
            return (val.slice(0, lengthOfSearchText) === searchText.toLowerCase())
        }))
    }
}