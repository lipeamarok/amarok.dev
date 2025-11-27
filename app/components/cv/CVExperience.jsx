import { View, Text, StyleSheet } from "@react-pdf/renderer";

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
  experienceItem: {
    marginBottom: 6,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  period: {
    fontSize: 8.5,
    color: "#666666",
    fontStyle: "italic",
  },
  company: {
    fontSize: 9,
    color: "#0e4276ff",
    marginBottom: 2,
    fontWeight: "semibold",
  },
  description: {
    fontSize: 8.5,
    color: "#444444",
    marginBottom: 2,
    lineHeight: 1.2,
  },
  achievementsList: {
    marginLeft: 10,
  },
  achievement: {
    fontSize: 8.5,
    color: "#333333",
    marginBottom: 1,
    lineHeight: 1.2,
  },
});

const CVExperience = ({ data, label }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{label}</Text>

      {data.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <View style={styles.experienceHeader}>
            <Text style={styles.jobTitle}>{exp.title}</Text>
            <Text style={styles.period}>{exp.period}</Text>
          </View>

          <Text style={styles.company}>{exp.company}</Text>

          {exp.description && (
            <Text style={styles.description}>{exp.description}</Text>
          )}

          <View style={styles.achievementsList}>
            {exp.achievements.map((achievement, idx) => (
              <Text key={idx} style={styles.achievement}>
                <Text style={styles.bullet}>•</Text>
                {achievement}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default CVExperience;
