// Variables
let elementParent = document.getElementById('parent');  // récupère élément parent
let elementEnfant = document.getElementById('enfant'); // récupère élément enfant
let btnZero = document.getElementById('remiseZero'); // récupère le btn remiseZero

// variables pour nombre de click
let parentCount = document.getElementById('parent-click');
let enfantCount = document.getElementById('enfant-click');

/**
 * Va permettre d'incrémenter la valeur du à l'extérieur du btn enfant (n'importe ou)
 */
function parentClick(){
    parentCount.innerHTML++;
}

/**
 * Va permettre d'incrémenter la valeur du click btn enfant
 * @param {*} event 
 */
function enfantClick(event){
    enfantCount.innerHTML++;
    event.stopPropagation();
}
/**
 * Va permettre une remise à zéro des deux valeurs click enfant et parent
 * @param {*} event 
 */
function remiseZero(event){
    enfantCount.innerHTML = 0;
    parentCount.innerHTML = 0;
    event.stopPropagation();
}

// au click du btn parent, on passe la fonction parentClick
elementParent.addEventListener('click', parentClick);

// au click du btn enfant, on passe la fonction enfantClick
elementEnfant.addEventListener('click', enfantClick);

// au click du btn remise à zero, les deux valeurs sont mise à zero
btnZero.addEventListener('click', remiseZero);