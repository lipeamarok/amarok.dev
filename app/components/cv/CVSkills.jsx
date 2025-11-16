import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    marginBottom: 15,
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
  categoryContainer: {
    marginBottom: 7,
  },
  categoryLabel: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 2,
  },
  skillsList: {
    fontSize: 8,
    color: "#CFD8DC",
    lineHeight: 1.3,
  },
});

const CVSkills = ({ data, label }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{label}</Text>

      {Object.entries(data).map(([category, skills], index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryLabel}>{category}</Text>
          <Text style={styles.skillsList}>{skills.join(", ")}</Text>
        </View>
      ))}
    </View>
  );
};
export default CVSkills;
