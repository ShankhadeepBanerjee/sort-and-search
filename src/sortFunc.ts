interface SortOptions {
    columnName: string,
    order : "asc" | "desc"
}

export function sortData(data: object[], options: SortOptions): object[]{
    const {columnName, order} = options

    if (data.length === 0) return []
    else if(!( columnName in data[0])){
        throw new ReferenceError(`"${columnName}" this key does not exist`)
    }else{
        return(data.sort((a:object, b:object) => (a[columnName as keyof object] > b[columnName as keyof object] && (order === "asc") ? 1 : -1)))
    }
}



