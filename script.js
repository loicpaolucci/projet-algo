
// Const du sujet 1 

const array = [10,15,3,7];
const k = 17 

const array0 = [1,8,10,21]
const k0 = 19

// Const du sujet 2 

const array1 = [3, 7, 8, 3, 6, 1];
const k1 = 3

const array2 = [1,4,5,8]
const k2 = 1

//projet algo - sujet 1 : exo 1 

const resultat = (array, k) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === Number(k)){
           return true;
        }
      }
    }
    return false;
  };
  
  
  console.log(resultat(array, k));
  console.log(resultat(array0, k0));


//projet algo - sujet 2 : exo 2 

const vueOuest = (array) => {
    let count = 1;
    for (let i = 0; i < array.length - 2; i++) {
      let laVue = true;
      for (let j = i + 1; j < array.length - i; j++) {
        if (array[i] <= array[j]) laVue = false;
      }
      laVue ? count++ : null;
      // le ? = condition ? val1 : val2 // Si condition vaut true, l'opérateur vaudra val1. Sinon il vaudra val2. Il est possible d'utiliser l'opérateur conditionnel aux mêmes endroits qu'un opérateur standard.
    }
    return count;
  };
  
  console.log(vueOuest(array1));
  console.log(vueOuest(array2));
  
  
