function solve(arr){
    let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g;
    let emails = arr[0].match(pattern);
    if(emails !== null){
        for(let m of emails){
            console.log(m.trim());
        }
    }
}
solve([ 'Please contact us at: support@github.com.']);
solve(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'])