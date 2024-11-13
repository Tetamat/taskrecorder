import firebase from "firebase/app"
import "firebase/database";

const database = firebase.database();
const ref = database.ref('position');

const newPosition = {
    "positionID": 1,
    "name": "Project",
    "cTasksIDs": [],
    "fTasksIDs": []
}

ref.push().set(newPosition)
    .then(() => {
        console.log('Data inserted successfully');
    } )
    .catch((error) => {
        console.log('Error inserting data', error);
    });