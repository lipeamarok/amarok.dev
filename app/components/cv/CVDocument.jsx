import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { cvData } from "../../locales/cv";
import CVHeader from "./CVHeader";
import CVExperience from "./CVExperience";
import CVProjects from "./CVProjects";
import CVSkills from "./CVSkills";
import CVEducation from "./CVEducation";

const styles = StyleSheet.create({
  page: {
    padding: 0,
    fontSize: 9,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },
  sidebar: {
    width: "28%",
    backgroundColor: "#37474F",
    padding: 20,
    paddingTop: 25,
    color: "#ffffff",
  },
  mainContent: {
    width: "72%",
    padding: 25,
    paddingTop: 30,
  },
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
  sidebarSectionTitle: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
    marginTop: 0,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 9,
    lineHeight: 1.4,
    color: "#333333",
  },
});

const CVDocument = ({ lang }) => {
  const data = cvData[lang];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* SIDEBAR ESQUERDA */}
        <View style={styles.sidebar}>
          {/* Skills na Sidebar */}
          <CVSkills data={data.skills} label={data.labels.skills} sidebar />

          {/* Education na Sidebar */}
          <CVEducation
            education={data.education}
            certifications={data.certifications}
            educationLabel={data.labels.education}
            certificationsLabel={data.labels.certifications}
            sidebar
          />
        </View>

        {/* CONTEÚDO PRINCIPAL */}
        <View style={styles.mainContent}>
          {/* Header no topo */}
          <CVHeader data={data.contact} />

          {/* Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{data.labels.summary}</Text>
            <Text style={styles.text}>{data.summary}</Text>
          </View>

          {/* Experience */}
          <CVExperience data={data.experience} label={data.labels.experience} />

          {/* Projects */}
          <CVProjects data={data.projects} label={data.labels.projects} />
        </View>
      </Page>
    </Document>
  );
};

export default CVDocument;
