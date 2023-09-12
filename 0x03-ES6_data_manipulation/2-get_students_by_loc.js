function getStudentsByLocation(students, city) {
  const result = students.filter((item) => item.location === city);
  return result;
}

export default getStudentsByLocation;
