interface SortOptions {
    columnName: string,
    order : "asc" | "desc"
}

export function sortData <T extends object>(data: T[], options: SortOptions): object[]{
    const {columnName, order} = options

    if (data.length === 0) return []
    else if(!( columnName in data[0])){
        throw new ReferenceError(`"${columnName}" this key does not exist`)
    }else{
        return(data.sort(<T>(a:T, b:T) => (a[columnName as keyof T] > b[columnName as keyof T] && (order === "asc") ? 1 : -1)))
    }
}



