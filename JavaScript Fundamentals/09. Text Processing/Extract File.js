function solve(str){
    let start = str.lastIndexOf('\\');
    let end = str.lastIndexOf('.');
    console.log(`File name: ${str.substring(start+1,end)}`);
    console.log(`File extension: ${str.substring(end+1,str.length)}`);
   
}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');