/* Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you 
need at that moment, like adjusting labels based on user choices.*/

function dynamic_key_function(key : string, value : string) {
    let my_dynamic_obj : any = {};
    my_dynamic_obj[key] = value;
    return my_dynamic_obj;
}

console.log(dynamic_key_function("Name","Kanwal Shehzadi"));