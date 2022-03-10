const isCamelCase =(text)=> {
    const result = text.replace( /([A-Z])/g, " $1" );
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    const words = finalResult.trim().split(/\s+/g)
    const finalLength = words.filter(txt => txt.length === 1).length
    return finalLength < 3
}

const camelize = (str) => {
    const STR = str.split(/[-_]/g).map(s => isCamelCase(s) ? s : s.toLowerCase()).join(' ');
    return STR.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

const camelizeKeys = o => Object.entries(o).reduce((acc,[k,v]) => ({...acc, [camelize(k)]: v}), {})

module.exports = { camelize, camelizeKeys }