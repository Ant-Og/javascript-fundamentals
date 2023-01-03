// Declare an object cohort that has the following properties:

// a string name (e.g 'May2022')
// a number id (e.g 1234)
// an array of student names

// Declare a function that accepts that object as argument and 
// print a message with the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

const cohort = {
  name: 'November2022',
  id: 321,
  student_names: ['Will', 'JC', 'Henry', 'Anthony']
}

const getCohortInfo = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.student_names.length} students in this cohort.`);
}

getCohortInfo(cohort)