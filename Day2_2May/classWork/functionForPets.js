var pets=['cat','dog','tiger'];

function prcessPets(pets){

    for(let i=0;i<pets.length;i++){

        pets[i]=pets[i] + 's';
    }
    console.log(pets);
}

prcessPets(pets);