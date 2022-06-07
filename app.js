const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

const printProfileData = profileDataArr => {

    // THIS....
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('=========')

    // IS THE SAME AS THIS....
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);