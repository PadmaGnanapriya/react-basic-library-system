export interface IAuthor {
    name: string
}

export interface IBook {
    title: string;
    isbn: string;
    author: IAuthor;
}

export type ReactSelectOption = {
    value: string
    label: string
}

export type UpdatableAuthor = {
    author: IAuthor
    index: number
}

export type UpdatableBook = {
    book: IBook
    index: number
}
