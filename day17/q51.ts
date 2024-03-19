function rectangle_area_func(width : number,height : number) : number{
    return width * height;
}

const rectangle_area_arrow_func = (width : number,height : number) : number => {
    return width * height;
}

console.log(`Using Normal Function Area = ${rectangle_area_func(4,5)}`);
console.log(`Using Arrow Function Area = ${rectangle_area_arrow_func(4,5)}`);