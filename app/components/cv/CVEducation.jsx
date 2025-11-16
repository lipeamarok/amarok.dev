import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#81D4FA",
    marginBottom: 8,
    marginTop: 0,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  subsectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 10,
    marginBottom: 5,
  },
  item: {
    marginBottom: 7,
  },
  degree: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 1.5,
  },
  period: {
    fontSize: 8,
    color: "#B0BEC5",
    fontStyle: "italic",
    marginBottom: 1.5,
  },
  institution: {
    fontSize: 8,
    color: "#CFD8DC",
  },
  certificationItem: {
    fontSize: 8,
    color: "#CFD8DC",
    marginBottom: 4,
  },
});

const CVEducation = ({
  education,
  certifications,
  educationLabel,
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
