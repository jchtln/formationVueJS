
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 */

let arrow1 = (args) => {
    return args+1;
}

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 *   - le mot clée "return" est interdis
 */

let arrow2 = (args) => (
    args+1
)

console.log(arrow1(20));

console.log(arrow2(25))

module.exports = {arrow1, arrow2};