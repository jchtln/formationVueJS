
/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */
const getGroupName = (obj) => {
    if (!obj) return undefined
    if (!obj.group) return undefined
    return obj.group.name;
  };
  const getGroupName2 = (obj) => {
    return obj?.group?.name;
  }
  const getGroupName3 = (obj) => obj?.group?.name;
  console.log(getGroupName3({group: {name: "admin"}}));
  

module.exports = {getGroupName};