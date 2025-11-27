import { View, Text, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    paddingBottom: 8,
    borderBottom: "2 solid #37474F",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 2,
    lineHeight: 1.2,
  },
  title: {
    fontSize: 10,
    color: "#0e4276ff",
    marginBottom: 6,
    lineHeight: 1.2,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    flexWrap: "wrap",
  },
  contactItem: {
    fontSize: 7.5,
    color: "#666666",
  },
  link: {
    fontSize: 7.5,
    color: "#666666",
    textDecoration: "none",
  },
  separator: {
    fontSize: 7.5,
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

        {data.portfolio && (
          <>
            <Text style={styles.separator}>•</Text>
            <Link src={`https://${data.portfolio}`} style={styles.link}>
              {data.portfolio}
            </Link>
          </>
        )}
      </View>
    </View>
  );
};
export default CVHeader;
