interface SearchOptions {
    columnName:string,
    searchText:string
}

export function searchData <T extends object>(data:T[], options:SearchOptions) {
    const {columnName, searchText} = options

    if (data.length === 0) return []

    else if(searchText === "") return(data)

    else if(!( columnName in data[0])){
        throw new ReferenceError(`"${columnName}" this key does not exist`)
    }
    else{
        return(data.filter(<T>(item: T) => {
            let val = String(item[columnName as keyof T]).toLowerCase();
            let lengthOfSearchText = searchText.length;
            return (val.slice(0, lengthOfSearchText) === searchText.toLowerCase())
        }))
    }
}