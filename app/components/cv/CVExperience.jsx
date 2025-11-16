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
  experienceItem: {
    marginBottom: 8,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  period: {
    fontSize: 9,
    color: "#666666",
    fontStyle: "italic",
  },
  company: {
    fontSize: 9.5,
    color: "#0e4276ff",
    marginBottom: 3,
    fontWeight: "semibold",
  },
  achievementsList: {
    marginLeft: 10,
  },
  achievement: {
    fontSize: 9,
    color: "#333333",
    marginBottom: 2,
    lineHeight: 1.3,
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
