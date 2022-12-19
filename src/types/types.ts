export interface MovieProps{
Title:string,
Type:string,
Year:string,
imdbID:string
}

export interface SearchProps extends MovieProps{
    Search:MovieProps[]
}