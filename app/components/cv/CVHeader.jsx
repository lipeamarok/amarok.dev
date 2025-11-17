import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    marginBottom: 15,
    paddingBottom: 12,
    borderBottom: "2 solid #37474F",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 3,
    lineHeight: 1.2,
  },
  title: {
    fontSize: 11,
    color: "#0e4276ff",
    marginBottom: 10,
    lineHeight: 1.2,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },
  contactItem: {
    fontSize: 8.5,
    color: "#666666",
  },
  link: {
    fontSize: 8.5,
    color: "#666666",
    textDecoration: "none",
  },
  separator: {
    fontSize: 8.5,
    color: "#cccccc",
  },
});

const CVHeader = ({ data }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.title}>{data.title}</Text>

      <View style={styles.contactRow}>
        <Text style={styles.contactItem}>{data.email}</Text>

        <Text style={styles.separator}>•</Text>

        <Link src={`https://${data.linkedin}`} style={styles.link}>
          {data.linkedin}
        </Link>

        <Text style={styles.separator}>•</Text>

        <Link src={`https://${data.github}`} style={styles.link}>
          {data.github}
        </Link>
      </View>
    </View>
  );
};
export default CVHeader;
