import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    marginBottom: 11,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 7,
    borderBottom: "2 solid #5B9FE3",
    paddingBottom: 3,
  },
  projectItem: {
    marginBottom: 7,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  projectName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  period: {
    fontSize: 9,
    color: "#666666",
    fontStyle: "italic",
  },
  description: {
    fontSize: 9,
    color: "#333333",
    marginBottom: 2,
    lineHeight: 1.3,
  },
  tech: {
    fontSize: 8,
    color: "#0e4276ff",
    fontStyle: "italic",
  },
});

const CVProjects = ({ data, label }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{label}</Text>

      {data.map((project, index) => (
        <View key={index} style={styles.projectItem}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.period}>{project.period}</Text>
          </View>

          <Text style={styles.description}>{project.description}</Text>

          <Text style={styles.tech}>Tech: {project.tech}</Text>
        </View>
      ))}
    </View>
  );
};

export default CVProjects;
