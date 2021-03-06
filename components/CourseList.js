import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';
import { terms, termMap, getCourseTerm } from '../utils/course';
import Course from '../components/Course';

const CourseList = ({courses, view}) => {

  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  console.log(courses);

  return (
  <View>
  <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
    <ScrollView>
      <CourseSelector courses={termCourses} view={view}></CourseSelector>
    </ScrollView>
  </View>
  )
}

// const styles = StyleSheet.create({
//   courseList: {
//       flex: 1,
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       alignItems: 'center',
//       justifyContent: 'flex-start',
//     },
// });

export default CourseList;