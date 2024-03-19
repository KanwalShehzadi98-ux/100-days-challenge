
/* Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
 like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.*/

 interface Programmer{
    languages : string[],
    tools : string[],
    frameworks : string[]
 }

 let programmer_skills : Programmer = {
    languages : ["Python","Typescript","Javascript","C#","Java"],
    tools : ["Jupyter Notebook","Visual Studio","Netbeans","Visual Studio Code"],
    frameworks : ["React","Next","Nest","Angular",".NET"]
 }

let {languages,tools,frameworks} = programmer_skills;

console.log(`${languages[0]},${tools[1]},${frameworks[2]}`);