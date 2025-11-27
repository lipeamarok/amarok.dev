import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#81D4FA",
    marginBottom: 6,
    marginTop: 0,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  subsectionTitle: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 8,
    marginBottom: 4,
  },
  item: {
    marginBottom: 5,
  },
  degree: {
    fontSize: 8.5,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 1,
  },
  techDegree: {
    fontSize: 8.5,
    fontWeight: "normal",
    color: "#ffffff",
    marginBottom: 1,
  },
  period: {
    fontSize: 7.5,
    color: "#B0BEC5",
    fontStyle: "italic",
    marginBottom: 1,
  },
  institution: {
    fontSize: 7.5,
    color: "#CFD8DC",
  },
  certificationItem: {
    fontSize: 7.5,
    color: "#CFD8DC",
    marginBottom: 3,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ffffff",
    opacity: 0.15,
    marginTop: 2,
    marginBottom: 8,
  },
});

const CVEducation = ({
  education,
  technicalEducation,
  certifications,
  educationLabel,
  technicalEducationLabel,
  certificationsLabel,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{educationLabel}</Text>

      {education.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.degree}>{item.degree}</Text>
          <Text style={styles.institution}>{item.institution}</Text>
          <Text style={styles.period}>{item.period}</Text>
        </View>
      ))}

      {technicalEducation && (
        <>
          <View style={styles.separator} />
          <Text style={styles.subsectionTitle}>{technicalEducationLabel}</Text>
          {technicalEducation.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.techDegree}>{item.degree}</Text>
              <Text style={styles.institution}>{item.institution}</Text>
              <Text style={styles.period}>{item.period}</Text>
            </View>
          ))}
        </>
      )}

      <View style={styles.separator} />
      <Text style={styles.subsectionTitle}>{certificationsLabel}</Text>

      {certifications.map((cert, index) => (
        <Text key={index} style={styles.certificationItem}>
          {cert}
        </Text>
      ))}
    </View>
  );
};

export default CVEducation;
