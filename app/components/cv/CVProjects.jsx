import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
    borderBottom: "2 solid #5B9FE3",
    paddingBottom: 2,
  },
  projectItem: {
    marginBottom: 5,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  projectName: {
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  awardLink: {
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#1a1a1a",
    textDecoration: "none",
  },
  period: {
    fontSize: 8.5,
    color: "#666666",
    fontStyle: "italic",
  },
  description: {
    fontSize: 8.5,
    color: "#333333",
    marginBottom: 1,
    lineHeight: 1.2,
  },
  tech: {
    fontSize: 7.5,
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
            <Text style={styles.projectName}>
              {project.name}{" "}
              {project.award && (
                <Link src={project.awardLink} style={styles.awardLink}>
                  {project.award}
                </Link>
              )}
            </Text>
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
